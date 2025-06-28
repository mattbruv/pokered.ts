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

class PokemonRed {
  #renderer: Renderer;
  #input: GameInput;
  #data: GameData;

  constructor(canvas: HTMLCanvasElement, cache: ImageCache) {
    this.#renderer = new Renderer(cache, canvas);
    this.#input = new GameInput();
    this.#data = this.#loadGame();
  }

  render() {
    this.#renderer.render(this.#data);
    console.log(this.#input.getInput());
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
