import { ImageCache } from "../gfx/images";
import { SpriteName } from "../sprite";

export enum MovementStatus {
  Uninitialized,
  Ready,
  Delayed,
  Moving
}

export type Sprite = {
  ledgeAnimationCounter: number;
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

const GB_PLAYER_SPRITE_X = 0x40;
const GB_PLAYER_SPRITE_Y = 0x3c;

// Sequence of y screen coordinates for player's sprite when jumping over a ledge.
const PLAYER_JUMP_Y_OFFSETS = [
  0x38, 0x36, 0x34, 0x32, 0x31, 0x30, 0x30, 0x30, 0x31, 0x32, 0x33, 0x34, 0x36,
  0x38, 0x3c, 0x3c
]
  // We want these offsets relative to where we draw the player, not the original GB offsets
  .map((y) => y - GB_PLAYER_SPRITE_Y);

export function drawSprite(
  screen: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
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

  const jumpOffset = sprite.hoppingLedge
    ? PLAYER_JUMP_Y_OFFSETS[sprite.ledgeAnimationCounter]
    : 0;

  const dx = 16 * tileX + offsetX;
  const spriteDy = 16 * tileY + offsetY;
  const spriteDyJump = spriteDy + jumpOffset;
  const dWidth = 16;
  const dHeight = 16;

  // If we're hopping a ledge, draw the player's shadow
  if (sprite.hoppingLedge) {
    //console.log(jumpOffset, sprite.ledgeAnimationCounter);
    screen.drawImage(
      cache["sprites-shadow_full"],
      0,
      0,
      16,
      16,
      dx,
      spriteDy + 8,
      16,
      16
    );
  }

  // If the sprite is facing right, we will be drawing a mirrored version of the left image
  // since they are both identical, it made sense for them to not include it in the sprite sheet.
  if (sprite.facing === FacingDirection.Right) {
    screen.save();
    screen.scale(-1, 1);
    screen.drawImage(
      spriteImage,
      sx,
      sy,
      sWidth,
      sHeight,
      -dx - dWidth,
      spriteDyJump,
      dWidth,
      dHeight
    );
    screen.restore();
  } else {
    screen.drawImage(
      spriteImage,
      sx,
      sy,
      sWidth,
      sHeight,
      dx,
      spriteDyJump,
      dWidth,
      dHeight
    );
  }
}
