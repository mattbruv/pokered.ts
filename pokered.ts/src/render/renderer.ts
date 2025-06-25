import { GameData } from "../game";
import { ImageCache } from "../gfx/images";
import { getMapImage } from "./map";
import { drawSprite } from "./sprite";

const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 144;

const BG_SIZE = 256;

export class Renderer {
  #images: ImageCache;
  #screen: HTMLCanvasElement;
  #debug: HTMLCanvasElement;

  constructor(
    cache: ImageCache,
    screen: HTMLCanvasElement,
    debug: HTMLCanvasElement
  ) {
    this.#screen = screen;
    this.#images = cache;
    this.#debug = debug;

    // Set output canvas height/width
    this.#screen.width = SCREEN_WIDTH;
    this.#screen.height = SCREEN_HEIGHT;

    // Debug canvas resolution
    this.#debug.width = BG_SIZE;
    this.#debug.height = BG_SIZE;

    const ctx = this.#screen.getContext("2d");
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

  render(game: GameData) {
    const ctx = this.#screen.getContext("2d");
    const ctxDebug = this.#debug.getContext("2d");

    if (ctx && ctxDebug) {
      const mapImage = getMapImage(game.map.currentMap, this.#images);

      ctxDebug.drawImage(mapImage, 0, 0);
      drawSprite(ctxDebug, game.player.sprite, this.#images);

      ctx.drawImage(this.#debug, 0, 0);
    }
  }
}
