import { ImageCache, loadImageBitmaps } from "./gfx/images";
import { MapName } from "./map";
import { getMap } from "./mapLookup";

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
    console.log(key);
    if (context) {
      context.drawImage(this.#images[key], 0, 0);
      const pallet = getMap(MapName.PalletTown);

      const hexLines = [];
      for (let i = 0; i < pallet.blocks.length; i += 4) {
        const group = pallet.blocks
          .slice(i, i + 4)
          .map((n) => n.toString(16).padStart(2, "0"))
          .join("");
        hexLines.push(group);
      }

      console.log(pallet);
      console.log(hexLines.join("\n"));
    }
  }
}

export async function createGame(
  canvas: HTMLCanvasElement
): Promise<PokemonRed> {
  const cache = await loadImageBitmaps();
  return new PokemonRed(canvas, cache);
}
