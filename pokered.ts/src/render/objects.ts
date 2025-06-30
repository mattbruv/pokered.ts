import { ImageCache } from "../gfx/images";
import { BLOCK_SIZE_PX } from "./map";
import { Map } from "../map";
import { drawSprite, Sprite } from "./sprite";

export function getObjectsImage(
  map: Map,
  sprites: Sprite[],
  images: ImageCache
): OffscreenCanvas {
  const canvas = new OffscreenCanvas(
    map.width * BLOCK_SIZE_PX,
    map.height * BLOCK_SIZE_PX
  );
  const ctx = canvas.getContext("2d");

  if (ctx) {
    for (const sprite of sprites) {
      drawSprite(
        ctx,
        sprite,
        images,
        sprite.position.x,
        sprite.position.y,
        0,
        0
      );
    }
  }

  return canvas;
}
