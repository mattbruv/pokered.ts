import { ImageCache, loadImageBitmaps } from "./gfx/images";
import { GameInput } from "./input";
import { Map, MapName } from "./map";
import { getMap } from "./mapLookup";
import { Renderer } from "./render/renderer";
import { FacingDirection, MovementStatus, SpriteData } from "./render/sprite";

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

    // TODO
  }

  #render() {
    this.#renderer.render(this.#data);
  }

  #loadGame(): GameData {
    const map = getMap(MapName.PalletTown);
    const data: GameData = {
      map: {
        currentMap: map,
      },
      player: {
        name: "Red",
        sprite: {
          facing: FacingDirection.Down,
          movementStatus: MovementStatus.Ready,
          animationFrameCounter: 0,
          position: {
            x: 5,
            y: 6,
          },
          image: "sprites-red",
        },
      },
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
