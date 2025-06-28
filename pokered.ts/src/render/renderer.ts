import { GameData } from "../game";
import { ImageCache } from "../gfx/images";
import { getMapImage, renderOverworld } from "./map";
import { Map } from "../map";
import { getMap } from "../mapLookup";

const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 144;

type MapCache = {
  mapImage: OffscreenCanvas;
  // TODO: objects
  //objectImage: OffscreenCanvas;
};

type OverworldCache = {
  current: MapCache;
  // Connections
  north?: MapCache;
  south?: MapCache;
  east?: MapCache;
  west?: MapCache;
};

export class Renderer {
  #images: ImageCache;
  #screen: HTMLCanvasElement;
  #overworldCache: OverworldCache;

  // Cache the image of the current map, and connections

  constructor(images: ImageCache, screen: HTMLCanvasElement) {
    this.#overworldCache = {
      current: {
        mapImage: new OffscreenCanvas(0, 0),
      },
    };

    this.#screen = screen;
    this.#images = images;

    // Set output canvas height/width
    this.#screen.width = SCREEN_WIDTH;
    this.#screen.height = SCREEN_HEIGHT;

    const ctx = this.#screen.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "magenta";
      ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    }
  }

  // When the player walks into/loads a new map,
  // load the adjacent maps and cache some stuff
  loadMap(map: Map) {
    this.#overworldCache.current.mapImage = getMapImage(map, this.#images);

    const directions = ["north", "east", "south", "west"] as const;

    for (const dir of directions) {
      const connection = map.connections[dir];
      if (connection?.map) {
        this.#overworldCache[dir] = {
          mapImage: getMapImage(getMap(connection.map), this.#images),
        };
      } else {
        this.#overworldCache[dir] = undefined; // clear if no connection
      }
    }

    console.log(this.#overworldCache);
  }

  render(game: GameData) {
    const ctx = this.#screen.getContext("2d");

    if (ctx) {
      ctx.fillStyle = "magenta";
      ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

      renderOverworld(
        ctx,
        this.#images,
        game.map.currentMap,
        this.#overworldCache.current.mapImage,
        game.player.sprite
      );
    }
  }
}
