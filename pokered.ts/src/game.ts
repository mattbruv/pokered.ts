import { ImageCache, loadImageBitmaps } from "./gfx/images";
import { MapName } from "./map";
import { getMap } from "./mapLookup";
import { getMapImage } from "./render/map";

const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 144;

class PokemonRed {
  #images: ImageCache;
  #canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, cache: ImageCache) {
    this.#canvas = canvas;
    this.#images = cache;
    const ctx = this.#canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "magenta";
      ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    }
  }

  drawImage(key: keyof ImageCache) {
    const context = this.#canvas.getContext("2d");

    if (context) {
      context.drawImage(this.#images[key], 0, 0);
      const start = performance.now();
      const mapCanvas = getMapImage(
        getMap(MapName.VermilionCity),
        this.#images
      );
      this.#canvas.width = mapCanvas.width;
      this.#canvas.height = mapCanvas.height;
      console.log(mapCanvas.width, mapCanvas.height);
      console.log(performance.now() - start);
      context.drawImage(mapCanvas, 0, 0);
    }
  }
}

export async function createGame(
  canvas: HTMLCanvasElement
): Promise<PokemonRed> {
  const cache = await loadImageBitmaps();
  return new PokemonRed(canvas, cache);
}
