import { GameData } from "../game";
import { BaseObjectDirection } from "../map";
import { FacingDirection } from "../render/sprite";

/**
 * Handle sprite update logic on each frame.
 * See: UpdateNPCSprite
 */
export function updateNPCSprite(data: GameData) {
  //
}

const OBJ_DIR_TO_FACING: Record<BaseObjectDirection, FacingDirection> = {
  UP: FacingDirection.Up,
  LEFT_RIGHT: FacingDirection.Left,
  ANY_DIR: FacingDirection.Down,
  RIGHT: FacingDirection.Right,
  DOWN: FacingDirection.Down,
  NONE: FacingDirection.Down,
  UP_DOWN: FacingDirection.Up,
  BOULDER_MOVEMENT_BYTE_2: FacingDirection.Down,
  LEFT: FacingDirection.Left
};

/**
 * Get the map object's facing direction based on it's range/direction
 */
export function getObjectFacingDirection(
  direction: BaseObjectDirection
): FacingDirection {
  return OBJ_DIR_TO_FACING[direction];
}
