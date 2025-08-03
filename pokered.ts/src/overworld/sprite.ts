import { GameData } from "../game";
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
  // If the player is not moving and we are pressing a key, move him
  if (player.movementStatus === MovementStatus.Ready) {
    let xDiff = 0;
    let yDiff = 0;

    if (keys.Down) yDiff = 1;
    if (keys.Up) yDiff = -1;
    if (keys.Left) xDiff = -1;
    if (keys.Right) xDiff = 1;

    // get position offset at x/y diff
    // get tile at that pos
    // if in collidables, don't move
    const { x, y } = player.position;
    const dx = player.position.x + xDiff;
    const dy = player.position.y + yDiff;

    // Only allow the player to press one key at a time to register walking
    if ((xDiff && !yDiff) || (yDiff && !xDiff)) {
      const currentTile = probeTile(game.map.currentMap, x, y);
      const nextTile = probeTile(game.map.currentMap, dx, dy);
      const nextNextTile = probeTile(
        game.map.currentMap,
        dx + xDiff,
        dy + yDiff
      );

      const collisionCheck = collisionLandCheck(
        game.map.currentMap.tileset,
        currentTile,
        nextTile
      );

      if (xDiff) {
        player.facing =
          xDiff > 0 ? FacingDirection.Right : FacingDirection.Left;
      } else if (yDiff) {
        player.facing = yDiff > 0 ? FacingDirection.Down : FacingDirection.Up;
      }

      if (game.joypad.scripted || !collisionCheck || game.debug.walkOnWalls) {
        game.debug.currentTile = nextTile;
        game.debug.nextTile = nextNextTile;
        player.image = nextTile.canSurf ? player.imageSurf : player.imageWalk;
        player.movementStatus = MovementStatus.Moving;
      } else {
        // we are not moving into a new tile, so just render the walking animation in place
        player.movementStatus = MovementStatus.WalkingInPlace;
      }

      // Process ledges
      if (
        !game.debug.walkOnWalls &&
        currentTile.inBounds &&
        nextTile.inBounds
      ) {
        const ledge = isJumpingLedge(
          player.facing,
          currentTile.tileId,
          nextTile.tileId
        );
        if (ledge && !game.joypad.scripted) {
          player.movementStatus = MovementStatus.Ready;
          console.log("JUMP LEDGE!", game.joypad.joypadStates);
          const key = ledge[3];
          game.player.sprite.hoppingLedge = true;
          SimulateJoypad(game.joypad, [key, key], () => {
            console.log("ledge jump finished");
            game.player.sprite.ledgeAnimationCounter = 0;
            game.player.sprite.hoppingLedge = false;
          });
        }
      }
    }
  }

  // If the player is moving, update the animation
  if (
    player.movementStatus === MovementStatus.Moving ||
    player.movementStatus === MovementStatus.WalkingInPlace
  ) {
    player.animationFrameCounter++;
    if (player.hoppingLedge) {
      // The original game has 16 different unique y-value offsets for the jump animation.
      // Each step is 16 frames, so we increment the ledge animation index (0-15) at half the rate
      // because the ledge jump animation is walking 2 steps (16 * 2)
      if (player.animationFrameCounter % 2 == 0) player.ledgeAnimationCounter++;
    }
    // If we finished the animation
    if (player.animationFrameCounter >= 16) {
      player.animationFrameCounter = 0;

      const joypad = game.joypad;

      if (joypad.scripted) {
        // remove the key we just consumed
        joypad.joypadStates.splice(0, 1);

        // Stop scripting the player if we ran out of joypad states
        if (!joypad.joypadStates.length) {
          joypad.scripted = false;
          // call the user defined callback function at the end of scripting
          joypad.onSimulationEnd();
        }
      }

      // Only update the player's position if we
      // are not walking in place
      if (
        joypad.scripted ||
        player.movementStatus !== MovementStatus.WalkingInPlace
      ) {
        if (player.facing == FacingDirection.Left) player.position.x--;
        if (player.facing == FacingDirection.Right) player.position.x++;
        if (player.facing == FacingDirection.Up) player.position.y--;
        if (player.facing == FacingDirection.Down) player.position.y++;
      }

      player.movementStatus = MovementStatus.Ready;

      const { x, y } = player.position;

      // If we have moved into a new map, load it.
      const connection = checkMapConnections(game.map.currentMap, x, y);

      if (connection) {
        console.log(connection.dir, connection.newPosition);
        player.position = connection.newPosition;
        const nextMap = game.map.currentMap.connections[connection.dir];
        if (nextMap) {
          loadMap(nextMap.map);
        }
      }

      // check to see if we've warped somewhere
      const warp = getWarpAtPos(game.map.currentMap, x, y);

      if (warp) {
        const nextMapName =
          warp.toMap === "LAST_MAP" || warp.toMap === "UNUSED_MAP_ED"
            ? game.map.previousOutdoorMapName
            : warp.toMap;

        // Load the warp map
        loadMap(nextMapName);

        // Set the player's position to the destination warp coordinates, looked up by index
        const destinationWarp =
          game.map.currentMap.objects.warps[warp.warpIndex];

        game.player.sprite.position = {
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
