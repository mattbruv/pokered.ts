import { GameData } from "../game";
import { ImageCache } from "../gfx/images";
import { getMapImage, renderOverworld } from "./map";

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

    if (ctx) {
      const mapImage = getMapImage(game.map.currentMap, this.#images);

      renderOverworld(
        ctx,
        this.#images,
        game.map.currentMap,
        mapImage,
        game.player.sprite
      );
    }
  }
}
