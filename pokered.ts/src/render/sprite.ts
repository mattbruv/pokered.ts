import { ImageCache } from "../gfx/images";
import { SpriteName } from "../sprite";

export enum MovementStatus {
  Uninitialized,
  Ready,
  Delayed,
  Moving
}

export type Sprite = {
  imageWalk: SpriteName;
  imageSurf: SpriteName;
  image: SpriteName;
  hoppingLedge: boolean;
  facing: FacingDirection;
  movementStatus: MovementStatus;
  animationFrameCounter: number;

  position: {
    x: number;
    y: number;
  };
};

export enum FacingDirection {
  Down,
  Up,
  Left,
  Right
}

export function drawSprite(
  ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  sprite: Sprite,
  cache: ImageCache,
  tileX: number,
  tileY: number,
  offsetX: number = 0,
  offsetY: number = 0
) {
  // at which index into the sprite-sheet is this sprite facing?
  const facingLookup: Record<FacingDirection, number> = {
    [FacingDirection.Down]: 0,
    [FacingDirection.Up]: 1,
    [FacingDirection.Left]: 2,
    [FacingDirection.Right]: 2
  };

  const spriteImage = cache[sprite.image];
  let facingIndex = facingLookup[sprite.facing];

  // If the sprite is in the second half of a walking animation,
  // show the walking frame, AKA bump the sprite-sheet index
  if (sprite.animationFrameCounter >= 8) {
    facingIndex += 3;
  }

  // sprites are laid out 16x16 top to bottom
  const sx = 0; // sprite will always be at leftmost part of image
  const sy = facingIndex * 16;
  const sWidth = 16;
  const sHeight = 16;

  const dx = 16 * tileX + offsetX;
  const dy = 16 * tileY + offsetY;
  const dWidth = 16;
  const dHeight = 16;

  // If the sprite is facing right, we will be drawing a mirrored version of the left image
  // since they are both identical, it made sense for them to not include it in the sprite sheet.
  if (sprite.facing === FacingDirection.Right) {
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(
      spriteImage,
      sx,
      sy,
      sWidth,
      sHeight,
      -dx - dWidth,
      dy,
      dWidth,
      dHeight
    );
    ctx.restore();
  } else {
    ctx.drawImage(
      spriteImage,
      sx,
      sy,
      sWidth,
      sHeight,
      dx,
      dy,
      dWidth,
      dHeight
    );
  }
}
