import { DebugCallbacks, DebugState, getDebugState } from "./debug";
import { ImageCache, loadImageBitmaps } from "./gfx/images";
import { GameInput } from "./input/input";
import { Map, MapName, MapObject, MapObjectData } from "./map";
import { getMap } from "./mapLookup";
import { TileProbe } from "./overworld/map";
import { getObjectFacingDirection, updateNPCSprite } from "./overworld/npc";
import { TickNPCs, TickPlayer } from "./overworld/sprite";
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
  player: PlayerData;
  map: MapData;
  debug: DebugData;
};

export type MapObjectWithSprite = {
  object: Readonly<MapObject>;
  sprite: Sprite;
};

export type MapData = {
  animFrameCounter: number;
  animFlowerIndex: number;
  animWaveMoveRight: boolean;
  animWaveIndex: number;
  currentMap: Map;
  currentMapObjects: MapObjectWithSprite[];
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
      },
      toggleBlockView: () => {
        this.#data.debug.showMapOutlines = !this.#data.debug.showMapOutlines;
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
    // blow the flowers in the wind and simulate waves
    this.#data.map.animFrameCounter++;

    // only update animations every 21 frames
    if (this.#data.map.animFrameCounter >= 21) {
      this.#data.map.animFrameCounter = 0;
      this.#data.map.animFlowerIndex++;
      this.#data.map.animFlowerIndex %= 3; // limit to three frames
      // update wave animation
      const waveIndexDirection = this.#data.map.animWaveMoveRight ? +1 : -1;
      const nextIndex = this.#data.map.animWaveIndex + waveIndexDirection;
      // If we've gone past our wave textures in either direction, change direction
      if (nextIndex < 0 || nextIndex >= 4) {
        this.#data.map.animWaveMoveRight = !this.#data.map.animWaveMoveRight;
        // this.#data.map.animWaveIndex += -waveIndexDirection;
      } else {
        this.#data.map.animWaveIndex = nextIndex;
      }
    }

    const keys = this.#input.getInput(this.#data.player);
    const player = this.#data.player.sprite;

    TickPlayer(
      player,
      keys,
      (mapName) => this.#loadMap(mapName),
      () => this.#updateDebugState(),
      this.#data
    );

    TickNPCs(this.#data, () => this.#updateDebugState());

    // Update NPC logic
    updateNPCSprite(this.#data);
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

    this.#data.map.currentMapObjects = nextMap.objects.objects.map(
      (object): MapObjectWithSprite => {
        const img = getOverworldSpriteKey(object.sprite);
        const sprite = {
          joypad: {
            joypadStates: [],
            onSimulationEnd: null,
            scripted: false
          },
          imageWalk: img,
          imageSurf: img,
          image: img,
          facing: getObjectFacingDirection(object.direction),
          movementStatus: MovementStatus.Ready,
          ledgeAnimationCounter: 0,
          animationFrameCounter: 0,
          position: {
            x: object.x,
            y: object.y
          },
          hoppingLedge: false
        };

        return { sprite, object };
      }
    );

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
        previousOutdoorMapName: MapName.Route1,
        currentMapObjects: [],
        animFrameCounter: 0,
        animFlowerIndex: 0,
        animWaveIndex: 0,
        animWaveMoveRight: false
      },
      player: {
        name: "Red",
        sprite: {
          joypad: {
            joypadStates: [],
            onSimulationEnd: null,
            scripted: false
          },
          facing: FacingDirection.Down,
          movementStatus: MovementStatus.Ready,
          animationFrameCounter: 0,
          ledgeAnimationCounter: 0,
          hoppingLedge: false,
          position: {
            x: 13,
            y: 16
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
