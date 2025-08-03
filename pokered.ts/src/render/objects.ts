import { ImageCache } from "../gfx/images";
import { drawSprite, getSpriteDrawOffset, Sprite } from "./sprite";

export function drawSprites(
  context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  sprites: Sprite[],
  onlyTopHalf: boolean,
  images: ImageCache,
  offsetX: number = 0,
  offsetY: number = 0
): void {
  for (const sprite of sprites) {
    const [walkOffsetX, walkOffsetY] = getSpriteDrawOffset(sprite);

    drawSprite(
      context,
      sprite,
      images,
      sprite.position.x,
      sprite.position.y,
      onlyTopHalf,
      offsetX + walkOffsetX,
      offsetY - 4 + walkOffsetY // All sprites are offset by 4 like the player.
    );
  }
}
