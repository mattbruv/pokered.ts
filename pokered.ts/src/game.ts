import { ImageCache, loadImageBitmaps } from "./gfx/images";
import { Map, MapName } from "./map";
import { getMap } from "./mapLookup";
import { getMapImage } from "./render/map";

const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 144;

export type GameData = {
  map: MapData;
  render: RenderData;
};

export type MapData = {
  currentMap: Map;
  playerPosition: {
    x: number;
    y: number;
  };
};

export type RenderData = {
  mapImage: OffscreenCanvas;
  //
};

class PokemonRed {
  #images: ImageCache;
  #canvas: HTMLCanvasElement;
  #debug: HTMLCanvasElement;
  #data: GameData;

  constructor(
    canvas: HTMLCanvasElement,
    debugCanvas: HTMLCanvasElement,
    cache: ImageCache
  ) {
    this.#canvas = canvas;
    this.#debug = debugCanvas;
    this.#images = cache;
    this.#data = this.#loadGame();

    this.#canvas.width = SCREEN_WIDTH;
    this.#canvas.height = SCREEN_HEIGHT;

    this.#debug.width = 256;
    this.#debug.height = 256;

    const ctx = this.#canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "magenta";
      ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    }

    const ctx2 = this.#debug.getContext("2d");
    if (ctx2) {
      ctx2.fillStyle = "magenta";
      ctx2.fillRect(0, 0, 256, 256);
    }
  }

  #loadGame(): GameData {
    const map = getMap(MapName.PalletTown);
    const data: GameData = {
      map: {
        currentMap: map,
        playerPosition: {
          x: 5,
          y: 6,
        },
      },
      render: {
        mapImage: getMapImage(map, this.#images),
      },
    };

    return data;
  }

  render() {
    this.#canvas.getContext("2d")?.drawImage(this.#data.render.mapImage, 0, 0);
    this.#debug.getContext("2d")?.drawImage(this.#data.render.mapImage, 0, 0);
  }

  drawImage(key: keyof ImageCache) {
    const context = this.#canvas.getContext("2d");
    if (context) {
      const start = performance.now();
      const mapCanvas = getMapImage(getMap(MapName.CeladonCity), this.#images);
      console.log(mapCanvas.width, mapCanvas.height);
      console.log(performance.now() - start);
      context.drawImage(mapCanvas, 0, 0);
      context.drawImage(this.#images[key], 0, 0);
    }
  }
}

export async function createGame(
  canvas: HTMLCanvasElement,
  debugCanvas: HTMLCanvasElement
): Promise<PokemonRed> {
  const cache = await loadImageBitmaps();
  return new PokemonRed(canvas, debugCanvas, cache);
}
