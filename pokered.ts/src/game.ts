import { ImageCache, loadImageBitmaps } from "./gfx";

class PokemonRed {
  #images: ImageCache;
  #canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, cache: ImageCache) {
    this.#canvas = canvas;
    this.#images = cache;
  }

  drawImage(key: keyof ImageCache) {
    const context = this.#canvas.getContext("2d");
    console.log(key);
    if (context) {
      context.drawImage(this.#images[key], 0, 0);
    }
  }
}

export async function createGame(
  canvas: HTMLCanvasElement
): Promise<PokemonRed> {
  const cache = await loadImageBitmaps();
  return new PokemonRed(canvas, cache);
}
