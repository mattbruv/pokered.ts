import { DebugCallbacks, DebugState, getDebugState } from "./debug";
import { ImageCache, loadImageBitmaps } from "./gfx/images";
import { GameInput, GameKey } from "./input/input";
import { JoypadState, SimulateJoypad } from "./input/joypad";
import { Map, MapName } from "./map";
import { getMap } from "./mapLookup";
import {
  checkMapConnections,
  probeTile,
  getWarpAtPos,
  TileProbe,
  collisionLandCheck,
  isJumpingLedge
} from "./overworld/map";
import { Renderer } from "./render/renderer";
import { FacingDirection, MovementStatus, Sprite } from "./render/sprite";
import { getOverworldSpriteKey } from "./sprite";
import { Tileset } from "./tileset";

type PokemonRedCallbacks = {
  onDebugStateChange(newState: DebugState): void;
};

export type PokemonRedOptions = {
  screen: HTMLCanvasElement;
  debug?: PokemonRedCallbacks;
};

export type PlayerData = {
  name: string;
  sprite: Sprite;
};

export type DebugData = {
  showMapOutlines: boolean;
  walkOnWalls: boolean;
  currentTile: TileProbe | null;
  nextTile: TileProbe | null;
};

export type GameData = {
  joypad: JoypadState;
  player: PlayerData;
  map: MapData;
  debug: DebugData;
};

export type MapData = {
  flowerAnimCounter: number;
  flowerAnimIndex: number;
  currentMap: Map;
  currentMapSprites: Sprite[];
  currentMapName: MapName;
  previousOutdoorMapName: MapName;
};

const SCREEN_REFRESH_RATE = 1000 / 60; // 16.666 MS per tick, GameBoy refreshes as 60 hertz

class PokemonRed {
  #renderer: Renderer;
  #input: GameInput;
  #data: GameData;
  #callbacks: PokemonRedCallbacks | undefined;

  #animationFrameId: number | null = null;
  #lastTimeStep = 0;
  #lag = 0;

  constructor(
    canvas: HTMLCanvasElement,
    cache: ImageCache,
    callbacks: PokemonRedCallbacks | undefined
  ) {
    this.#renderer = new Renderer(cache, canvas);
    this.#input = new GameInput({
      toggleWalkOnWalls: () => {
        this.#data.debug.walkOnWalls = !this.#data.debug.walkOnWalls;
        this.#updateDebugState();
      }
    });
    this.#data = this.#loadGame();
    this.#callbacks = callbacks;
    this.#loadMap(this.#data.map.currentMapName);
  }

  #gameLoop = (timestamp: DOMHighResTimeStamp) => {
    const elapsed = timestamp - this.#lastTimeStep;
    this.#lastTimeStep = timestamp;
    this.#lag += elapsed;

    let render = false;
    while (this.#lag >= SCREEN_REFRESH_RATE) {
      this.#update();
      render = true;
      this.#lag -= SCREEN_REFRESH_RATE;
    }

    if (render) this.#render();

    this.#animationFrameId = requestAnimationFrame(this.#gameLoop);
  };

  start() {
    this.#lastTimeStep = performance.now();
    this.#lag = 0;

    if (this.#animationFrameId === null) {
      this.#animationFrameId = requestAnimationFrame(this.#gameLoop);
    }
  }

  stop() {
    if (this.#animationFrameId !== null) {
      cancelAnimationFrame(this.#animationFrameId);
      this.#animationFrameId = null;
    }
  }

  // Game update logic
  #update() {
    // blow the flowers in the wind
    this.#data.map.flowerAnimCounter++;
    if (this.#data.map.flowerAnimCounter >= 21) {
      this.#data.map.flowerAnimCounter = 0;
      this.#data.map.flowerAnimIndex++;
      this.#data.map.flowerAnimIndex %= 3; // limit to three frames
    }

    const keys = this.#input.getInput(this.#data.joypad, this.#data.player);
    const player = this.#data.player.sprite;

    // If the player is not moving and we are pressing a key, move him
    if (player.movementStatus === MovementStatus.Ready) {
      let xDiff = 0;
      let yDiff = 0;

      if (keys.Down) yDiff = 1;
      if (keys.Up) yDiff = -1;
      if (keys.Left) xDiff = -1;
      if (keys.Right) xDiff = 1;

      // get position offset at x/y diff
      // get tile at that pos
      // if in collidables, don't move
      const { x, y } = player.position;
      const dx = player.position.x + xDiff;
      const dy = player.position.y + yDiff;

      // Only allow the player to press one key at a time to register walking
      if ((xDiff && !yDiff) || (yDiff && !xDiff)) {
        const currentTile = probeTile(this.#data.map.currentMap, x, y);
        const nextTile = probeTile(this.#data.map.currentMap, dx, dy);
        const nextNextTile = probeTile(
          this.#data.map.currentMap,
          dx + xDiff,
          dy + yDiff
        );

        const collisionCheck = collisionLandCheck(
          this.#data.map.currentMap.tileset,
          currentTile,
          nextTile
        );

        if (xDiff) {
          player.facing =
            xDiff > 0 ? FacingDirection.Right : FacingDirection.Left;
        } else if (yDiff) {
          player.facing = yDiff > 0 ? FacingDirection.Down : FacingDirection.Up;
        }

        if (
          this.#data.joypad.scripted ||
          !collisionCheck ||
          this.#data.debug.walkOnWalls
        ) {
          this.#data.debug.currentTile = nextTile;
          this.#data.debug.nextTile = nextNextTile;
          player.image = nextTile.canSurf ? player.imageSurf : player.imageWalk;
          player.movementStatus = MovementStatus.Moving;
        }

        // Process ledges
        if (
          !this.#data.debug.walkOnWalls &&
          currentTile.inBounds &&
          nextTile.inBounds
        ) {
          const ledge = isJumpingLedge(
            player.facing,
            currentTile.tileId,
            nextTile.tileId
          );
          if (ledge && !this.#data.joypad.scripted) {
            const key = ledge[3];
            SimulateJoypad(this.#data.joypad, [key, key]);
            console.log("JUMP LEDGE!", this.#data.joypad.joypadStates);
          }
        }
      }
    }

    // If the player is moving, update the animation
    if (player.movementStatus === MovementStatus.Moving) {
      player.animationFrameCounter++;
      // If we finished the animation
      if (player.animationFrameCounter >= 16) {
        player.animationFrameCounter = 0;

        if (player.facing == FacingDirection.Left) player.position.x--;
        if (player.facing == FacingDirection.Right) player.position.x++;
        if (player.facing == FacingDirection.Up) player.position.y--;
        if (player.facing == FacingDirection.Down) player.position.y++;

        player.movementStatus = MovementStatus.Ready;

        const { x, y } = player.position;

        // If we have moved into a new map, load it.
        const connection = checkMapConnections(this.#data.map.currentMap, x, y);

        if (connection) {
          console.log(connection.dir, connection.newPosition);
          player.position = connection.newPosition;
          const nextMap = this.#data.map.currentMap.connections[connection.dir];
          if (nextMap) {
            this.#loadMap(nextMap.map);
          }
        }

        // check to see if we've warped somewhere
        const warp = getWarpAtPos(this.#data.map.currentMap, x, y);

        if (warp) {
          const nextMapName =
            warp.toMap === "LAST_MAP" || warp.toMap === "UNUSED_MAP_ED"
              ? this.#data.map.previousOutdoorMapName
              : warp.toMap;

          // Load the warp map
          this.#loadMap(nextMapName);

          // Set the player's position to the destination warp coordinates, looked up by index
          const destinationWarp =
            this.#data.map.currentMap.objects.warps[warp.warpIndex];

          this.#data.player.sprite.position = {
            x: destinationWarp.x,
            y: destinationWarp.y
          };
        }

        this.#updateDebugState();
      }
    }
  }

  #updateDebugState() {
    if (this.#callbacks?.onDebugStateChange) {
      this.#callbacks.onDebugStateChange(getDebugState(this.#data));
    }
  }

  #loadMap(nextMapName: MapName) {
    const nextMap = getMap(nextMapName);
    console.log(MapName[nextMapName]);
    // Load a new map
    if (this.#data.map.currentMap.tileset === Tileset.OVERWORLD) {
      this.#data.map.previousOutdoorMapName = this.#data.map.currentMapName;
    }
    this.#data.map.currentMapName = nextMapName;
    this.#data.map.currentMap = nextMap;

    this.#data.debug.currentTile = null;
    this.#data.debug.nextTile = null;

    this.#data.map.currentMapSprites = nextMap.objects.objects.map(
      (obj): Sprite => {
        const img = getOverworldSpriteKey(obj.sprite);
        return {
          imageWalk: img,
          imageSurf: img,
          image: img,
          facing: FacingDirection.Down,
          movementStatus: MovementStatus.Ready,
          animationFrameCounter: 0,
          position: {
            x: obj.x,
            y: obj.y
          }
        };
      }
    );

    this.#renderer.loadMap(nextMap, this.#data.map.currentMapSprites);
  }

  #render() {
    this.#renderer.render(this.#data);
  }

  #loadGame(): GameData {
    const mapName = MapName.PalletTown;
    const map = getMap(mapName);
    const data: GameData = {
      map: {
        currentMap: map,
        currentMapName: mapName,
        previousOutdoorMapName: MapName.PalletTown,
        currentMapSprites: [],
        flowerAnimCounter: 0,
        flowerAnimIndex: 0
      },
      player: {
        name: "Red",
        sprite: {
          facing: FacingDirection.Down,
          movementStatus: MovementStatus.Ready,
          animationFrameCounter: 0,
          position: {
            x: 2,
            y: 2
          },
          image: "sprites-red",
          imageWalk: "sprites-red",
          imageSurf: "sprites-seel"
        }
      },
      debug: {
        showMapOutlines: false,
        walkOnWalls: false,
        currentTile: null,
        nextTile: null
      },
      joypad: {
        scripted: false,
        joypadStates: []
      }
    };

    return data;
  }

  getDebugCallbacks(): DebugCallbacks {
    return {
      setMap: (map, x, y) => {
        this.#data.player.sprite.position.x = x;
        this.#data.player.sprite.position.y = y;
        this.#loadMap(map);
        this.#updateDebugState();
      },
      setWalkOnWalls: (value) => {
        this.#data.debug.walkOnWalls = value;
        this.#updateDebugState();
      },
      setSprite: (sprite) => {
        const img = getOverworldSpriteKey(sprite);
        this.#data.player.sprite.imageWalk = img;
        this.#data.player.sprite.image = img;
        this.#updateDebugState();
        this.#render();
      },
      setShowMapOutlines: (value) => {
        this.#data.debug.showMapOutlines = value;
        this.#updateDebugState();
      }
    };
  }
}

export async function createGame(
  options: PokemonRedOptions
): Promise<PokemonRed> {
  const cache = await loadImageBitmaps();
  return new PokemonRed(options.screen, cache, options.debug);
}
