import { GameData } from "../game";
import { ImageCache } from "../gfx/images";
import { getMapImage, renderOverworld } from "./map";

const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 144;

const BG_SIZE = 256;

export class Renderer {
  #images: ImageCache;
  #screen: HTMLCanvasElement;

  constructor(cache: ImageCache, screen: HTMLCanvasElement) {
    this.#screen = screen;
    this.#images = cache;

    // Set output canvas height/width
    this.#screen.width = SCREEN_WIDTH;
    this.#screen.height = SCREEN_HEIGHT;

    const ctx = this.#screen.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "magenta";
      ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
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
