import { DebugData, GameData, MapData } from "../game";
import { InputState } from "../input/input";
import { SimulateJoypad } from "../input/joypad";
import { MapName } from "../map";
import { FacingDirection, MovementStatus, Sprite } from "../render/sprite";
import {
  probeTile,
  collisionLandCheck,
  isJumpingLedge,
  checkMapConnections,
  getWarpAtPos
} from "./map";

export function TickPlayer(
  player: Sprite,
  keys: InputState,
  loadMap: (nextMapName: MapName) => void,
  updateDebugState: () => void,
  game: GameData
) {
  handleSpriteMovement(
    player,
    keys,
    game.map,
    game.debug,
    loadMap,
    updateDebugState
  );
}

/**
 * If keys are pressed, move the sprite accordingly
 * Or update the sprite's movement state if moving already.
 */
function handleSpriteMovement(
  sprite: Sprite,
  keys: InputState,
  mapData: MapData,
  debug: DebugData | null,
  loadMap: (nextMapName: MapName) => void,
  updateDebugState: () => void
) {
  // If the sprite is not moving and we are pressing a key, move it
  if (sprite.movementStatus === MovementStatus.Ready) {
    let xDiff = 0;
    let yDiff = 0;

    if (keys.Down) yDiff = 1;
    if (keys.Up) yDiff = -1;
    if (keys.Left) xDiff = -1;
    if (keys.Right) xDiff = 1;

    // get position offset at x/y diff
    // get tile at that pos
    // if in collidables, don't move
    const { x, y } = sprite.position;
    const dx = sprite.position.x + xDiff;
    const dy = sprite.position.y + yDiff;

    // Only allow one key at a time
    if ((xDiff && !yDiff) || (yDiff && !xDiff)) {
      const currentTile = probeTile(mapData.currentMap, x, y);
      const nextTile = probeTile(mapData.currentMap, dx, dy);
      const nextNextTile = probeTile(
        mapData.currentMap,
        dx + xDiff,
        dy + yDiff
      );

      const collisionCheck = collisionLandCheck(
        mapData.currentMap.tileset,
        currentTile,
        nextTile
      );

      if (xDiff) {
        sprite.facing =
          xDiff > 0 ? FacingDirection.Right : FacingDirection.Left;
      } else if (yDiff) {
        sprite.facing = yDiff > 0 ? FacingDirection.Down : FacingDirection.Up;
      }

      if (sprite.joypad.scripted || !collisionCheck || debug?.walkOnWalls) {
        if (debug) {
          debug.currentTile = nextTile;
          debug.nextTile = nextNextTile;
        }
        sprite.image = nextTile.canSurf ? sprite.imageSurf : sprite.imageWalk;
        sprite.movementStatus = MovementStatus.Moving;
      } else {
        // we are not moving into a new tile, so just render the walking animation in place
        sprite.movementStatus = MovementStatus.WalkingInPlace;
      }

      // Process ledges
      if (!debug?.walkOnWalls && currentTile.inBounds && nextTile.inBounds) {
        const ledge = isJumpingLedge(
          sprite.facing,
          currentTile.tileId,
          nextTile.tileId
        );
        if (ledge && !sprite.joypad.scripted) {
          sprite.movementStatus = MovementStatus.Ready;
          console.log("JUMP LEDGE!", sprite.joypad.joypadStates);
          const key = ledge[3];
          sprite.hoppingLedge = true;
          SimulateJoypad(sprite.joypad, [key, key], () => {
            console.log("ledge jump finished");
            sprite.ledgeAnimationCounter = 0;
            sprite.hoppingLedge = false;
          });
        }
      }
    }
  }

  // If the player is moving, update the animation
  if (
    sprite.movementStatus === MovementStatus.Moving ||
    sprite.movementStatus === MovementStatus.WalkingInPlace
  ) {
    sprite.animationFrameCounter++;
    if (sprite.hoppingLedge) {
      // The original game has 16 different unique y-value offsets for the jump animation.
      // Each step is 16 frames, so we increment the ledge animation index (0-15) at half the rate
      // because the ledge jump animation is walking 2 steps (16 * 2)
      if (sprite.animationFrameCounter % 2 == 0) sprite.ledgeAnimationCounter++;
    }
    // If we finished the animation
    if (sprite.animationFrameCounter >= 16) {
      sprite.animationFrameCounter = 0;

      const joypad = sprite.joypad;

      if (joypad.scripted) {
        // remove the key we just consumed
        joypad.joypadStates.splice(0, 1);

        // Stop scripting the player if we ran out of joypad states
        if (!joypad.joypadStates.length) {
          joypad.scripted = false;
          // call the user defined callback function at the end of scripting
          if (joypad.onSimulationEnd) joypad.onSimulationEnd();
        }
      }

      // Only update the player's position if we
      // are not walking in place
      if (
        joypad.scripted ||
        sprite.movementStatus !== MovementStatus.WalkingInPlace
      ) {
        if (sprite.facing == FacingDirection.Left) sprite.position.x--;
        if (sprite.facing == FacingDirection.Right) sprite.position.x++;
        if (sprite.facing == FacingDirection.Up) sprite.position.y--;
        if (sprite.facing == FacingDirection.Down) sprite.position.y++;
      }

      sprite.movementStatus = MovementStatus.Ready;

      const { x, y } = sprite.position;

      // If we have moved into a new map, load it.
      const connection = checkMapConnections(mapData.currentMap, x, y);

      if (connection) {
        console.log(connection.dir, connection.newPosition);
        sprite.position = connection.newPosition;
        const nextMap = mapData.currentMap.connections[connection.dir];
        if (nextMap) {
          loadMap(nextMap.map);
        }
      }

      // check to see if we've warped somewhere
      const warp = getWarpAtPos(mapData.currentMap, x, y);

      if (warp) {
        const nextMapName =
          warp.toMap === "LAST_MAP" || warp.toMap === "UNUSED_MAP_ED"
            ? mapData.previousOutdoorMapName
            : warp.toMap;

        // Load the warp map
        loadMap(nextMapName);

        // Set the player's position to the destination warp coordinates, looked up by index
        const destinationWarp =
          mapData.currentMap.objects.warps[warp.warpIndex];

        sprite.position = {
          x: destinationWarp.x,
          y: destinationWarp.y
        };
      }

      updateDebugState();
    }
  }
}

export function TickNPCs() {
  //
}
