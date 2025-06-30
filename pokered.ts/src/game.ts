import { ImageCache, loadImageBitmaps } from "./gfx/images";
import { GameInput } from "./input";
import { Map, MapName } from "./map";
import { getMap } from "./mapLookup";
import {
  checkMapConnections,
  canWalkOnTile,
  getWarpAtPos
} from "./overworld/map";
import { Renderer } from "./render/renderer";
import { FacingDirection, MovementStatus, SpriteData } from "./render/sprite";
import { Tileset } from "./tileset";

export type PokemonRedOptions = {
  screen: HTMLCanvasElement;
};

export type PlayerData = {
  name: string;
  sprite: SpriteData;
};

export type GameData = {
  player: PlayerData;
  map: MapData;
};

export type MapData = {
  currentMap: Map;
  currentMapName: MapName;
  previousOutdoorMapName: MapName;
};

const SCREEN_REFRESH_RATE = 1000 / 60; // 16.666 MS per tick, GameBoy refreshes as 60 hertz

class PokemonRed {
  #renderer: Renderer;
  #input: GameInput;
  #data: GameData;

  #animationFrameId: number | null = null;
  #lastTimeStep = 0;
  #lag = 0;

  constructor(canvas: HTMLCanvasElement, cache: ImageCache) {
    this.#renderer = new Renderer(cache, canvas);
    this.#input = new GameInput();
    this.#data = this.#loadGame();
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
    const keys = this.#input.getInput();
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
      const dx = player.position.x + xDiff;
      const dy = player.position.y + yDiff;

      if (xDiff || yDiff) {
        //console.log(player.position);
        const canWalkForward = canWalkOnTile(this.#data.map.currentMap, dx, dy);
        if (canWalkForward) {
          if (xDiff) {
            player.movementStatus = MovementStatus.Moving;
            player.facing =
              xDiff > 0 ? FacingDirection.Right : FacingDirection.Left;
          } else if (yDiff) {
            player.movementStatus = MovementStatus.Moving;
            player.facing =
              yDiff > 0 ? FacingDirection.Down : FacingDirection.Up;
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

        console.log(player.position);

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
      }
    }
  }

  #loadMap(nextMapName: MapName) {
    const nextMap = getMap(nextMapName);
    // Load a new map
    if (this.#data.map.currentMap.tileset === Tileset.OVERWORLD) {
      this.#data.map.previousOutdoorMapName = this.#data.map.currentMapName;
    }
    this.#data.map.currentMapName = nextMapName;
    this.#data.map.currentMap = nextMap;
    this.#renderer.loadMap(nextMap);
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
        previousOutdoorMapName: mapName
      },
      player: {
        name: "Red",
        sprite: {
          facing: FacingDirection.Down,
          movementStatus: MovementStatus.Ready,
          animationFrameCounter: 0,
          position: {
            x: 5,
            y: 6
          },
          image: "sprites-red"
        }
      }
    };

    return data;
  }
}

export async function createGame(
  options: PokemonRedOptions
): Promise<PokemonRed> {
  const cache = await loadImageBitmaps();
  return new PokemonRed(options.screen, cache);
}
