import { GameData } from "../game";
import { ImageCache } from "../gfx/images";
import { getMapImage, renderOverworld } from "./map";
import { Map } from "../map";
import { getMap } from "../mapLookup";

const SCREEN_WIDTH = 160;
const SCREEN_HEIGHT = 144;

export type MapCache = {
  mapImage: OffscreenCanvas;
  // TODO: objects
  //objectImage: OffscreenCanvas;
};

export type OverworldCache = {
  current: MapCache;
  outOfBounds: OffscreenCanvas;
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
        mapImage: new OffscreenCanvas(0, 0)
      },
      outOfBounds: new OffscreenCanvas(SCREEN_WIDTH, SCREEN_HEIGHT)
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
    this.#overworldCache.current.mapImage = getMapImage(
      map.width,
      map.height,
      map.tileset,
      map.blocks,
      this.#images
    );

    const directions = ["north", "east", "south", "west"] as const;

    for (const dir of directions) {
      const connection = map.connections[dir];
      if (connection?.map) {
        const connMap = getMap(connection.map);
        this.#overworldCache[dir] = {
          mapImage: getMapImage(
            connMap.width,
            connMap.height,
            connMap.tileset,
            connMap.blocks,
            this.#images
          )
        };
      } else {
        this.#overworldCache[dir] = undefined; // clear cache if no connection
      }
    }

    // draw the out of bounds block background image

    // let's just create a dummy map and have it rendered with the border tile.
    // we then render this relative to the player's offset.
    // needs to be tall and wide enough to cover the screen and be rendered relative to the player
    const w = 7;
    const h = 7;
    const oobBlocks = Array.from({ length: w * h }, (_) => map.borderBlock);
    this.#overworldCache.outOfBounds = getMapImage(
      w,
      h,
      map.tileset,
      oobBlocks,
      this.#images
    );

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
        this.#overworldCache,
        game.player.sprite
      );
    }
  }
}
