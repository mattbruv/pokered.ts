import { ImageCache } from "../gfx/images";
import { drawSprite, Sprite } from "./sprite";

export function drawSprites(
  context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  sprites: Sprite[],
  onlyTopHalf: boolean,
  images: ImageCache,
  offsetX: number = 0,
  offsetY: number = 0
): void {
  for (const sprite of sprites) {
    drawSprite(
      context,
      sprite,
      images,
      sprite.position.x,
      sprite.position.y,
      onlyTopHalf,
      offsetX,
      offsetY - 4 // All sprites are offset by 4 like the player.
    );
  }
}
