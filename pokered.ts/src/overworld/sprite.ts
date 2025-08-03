import { DebugData, GameData, MapData } from "../game";
import { GameKey, InputState } from "../input/input";
import { SimulateJoypad } from "../input/joypad";
import { BaseObjectDirection, Map, MapName, MovementType, Warp } from "../map";
import { FacingDirection, MovementStatus, Sprite } from "../render/sprite";
import {
  probeTile,
  collisionLandCheck,
  isJumpingLedge,
  checkMapConnections,
  getWarpAtPos,
  ConnectionDir
} from "./map";

export function TickPlayer(
  player: Sprite,
  keys: InputState,
  loadMap: (nextMapName: MapName) => void,
  updateDebugState: () => void,
  game: GameData
) {
  const onConnection = (connection: ConnectionDir) => {
    processConnection(connection, game, player, loadMap);
  };

  const onWarp = (warp: Warp) => {
    handleWarp(warp, game, loadMap, player);
  };

  const allSprites = [
    player,
    ...game.map.currentMapObjects.map((x) => x.sprite)
  ];

  // Move the player
  handleSpriteMovement(
    player,
    keys,
    game.map.currentMap,
    allSprites,
    game.debug,
    onConnection,
    onWarp,
    updateDebugState
  );
}

const DIRECTION_KEYS: Record<BaseObjectDirection, GameKey[]> = {
  UP: ["Up"],
  LEFT_RIGHT: ["Left", "Right"],
  ANY_DIR: ["Left", "Right", "Up", "Down"],
  RIGHT: ["Right"],
  DOWN: ["Down"],
  NONE: [],
  UP_DOWN: ["Up", "Down"],
  BOULDER_MOVEMENT_BYTE_2: [],
  LEFT: ["Left"]
};

const KEY_FACING: Record<GameKey, FacingDirection> = {
  Up: FacingDirection.Up,
  Down: FacingDirection.Down,
  Left: FacingDirection.Left,
  Right: FacingDirection.Right
};

export function TickNPCs(game: GameData, updateDebugState: () => void) {
  for (const npc of game.map.currentMapObjects) {
    // TODO: only add new sprite movements if it is within the player's view
    if (!npc.sprite.joypad.joypadStates.length) {
      // Add a new state for walkers (or turn NPC if not walker) every ~4 seconds.
      if (Math.floor(Math.random() * 4 * 60) === 0) {
        const keys = DIRECTION_KEYS[npc.object.direction];
        if (keys.length) {
          const randomKey = keys[Math.floor(Math.random() * keys.length)];

          const behavior: Record<MovementType, () => void> = {
            STAY: () => {
              npc.sprite.facing = KEY_FACING[randomKey];
            },
            WALK: () => {
              SimulateJoypad(npc.sprite.joypad, [randomKey], null);
            }
          };

          behavior[npc.object.movement]();
        }
      }
    }

    const key: GameKey | undefined = npc.sprite.joypad.scripted
      ? npc.sprite.joypad.joypadStates.at(0)
      : undefined;

    const state: InputState = {
      Up: false,
      Down: false,
      Left: false,
      Right: false
    };

    if (key) state[key] = true;

    const allSprites = [
      game.player.sprite,
      ...game.map.currentMapObjects.map((x) => x.sprite)
    ];

    handleSpriteMovement(
      npc.sprite,
      state,
      game.map.currentMap,
      allSprites,
      null,
      null,
      null,
      updateDebugState
    );
  }
}

function handleWarp(
  warp: Warp,
  game: GameData,
  loadMap: (nextMapName: MapName) => void,
  player: Sprite
) {
  const nextMapName =
    warp.toMap === "LAST_MAP" || warp.toMap === "UNUSED_MAP_ED"
      ? game.map.previousOutdoorMapName
      : warp.toMap;

  // Load the warp map
  loadMap(nextMapName);

  // Set the player's position to the destination warp coordinates, looked up by index
  const destinationWarp = game.map.currentMap.objects.warps[warp.warpIndex];

  player.position = {
    x: destinationWarp.x,
    y: destinationWarp.y
  };
}

function processConnection(
  connection: ConnectionDir,
  game: GameData,
  player: Sprite,
  loadMap: (nextMapName: MapName) => void
) {
  console.log(connection.dir, connection.newPosition);
  player.position = connection.newPosition;
  const nextMap = game.map.currentMap.connections[connection.dir];
  if (nextMap) {
    loadMap(nextMap.map);
  }
}

/**
 * If keys are pressed, move the sprite accordingly
 * Or update the sprite's movement state if moving already.
 */
function handleSpriteMovement(
  sprite: Sprite,
  keys: InputState,
  currentMap: Map,
  allSprites: Sprite[],
  debug: DebugData | null,
  onConnection: ((connection: ConnectionDir) => void) | null,
  onWarp: ((warp: Warp) => void) | null,
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
      // If we have supplied an onConnection callback, allow walking outside of the map
      const allowConnections = onConnection !== null;

      const currentTile = probeTile(
        allSprites,
        currentMap,
        x,
        y,
        allowConnections
      );
      const nextTile = probeTile(
        allSprites,
        currentMap,
        dx,
        dy,
        allowConnections
      );
      const nextNextTile = probeTile(
        allSprites,
        currentMap,
        dx + xDiff,
        dy + yDiff,
        allowConnections
      );

      const collisionCheck = collisionLandCheck(
        currentMap.tileset,
        currentTile,
        nextTile
      );

      if (xDiff) {
        sprite.facing =
          xDiff > 0 ? FacingDirection.Right : FacingDirection.Left;
      } else if (yDiff) {
        sprite.facing = yDiff > 0 ? FacingDirection.Down : FacingDirection.Up;
      }

      if (sprite.hoppingLedge || !collisionCheck || debug?.walkOnWalls) {
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
        if (ledge && !sprite.hoppingLedge) {
          sprite.hoppingLedge = true;
          sprite.movementStatus = MovementStatus.Ready;
          console.log("JUMP LEDGE!", sprite.joypad.joypadStates);
          const key = ledge[3];
          SimulateJoypad(sprite.joypad, [key, key], () => {
            console.log("ledge jump finished", sprite.imageWalk);
            sprite.ledgeAnimationCounter = 0;
            sprite.hoppingLedge = false;
          });
        }
      }
    }
  }

  // If the sprite is moving, update the animation
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

        // Stop scripting the sprite if we ran out of joypad states
        if (!joypad.joypadStates.length) {
          joypad.scripted = false;
          // call the user defined callback function at the end of scripting
          if (joypad.onSimulationEnd) joypad.onSimulationEnd();
        }
      }

      // Only update the sprite's position if we are not walking in place
      if (sprite.movementStatus !== MovementStatus.WalkingInPlace) {
        if (sprite.facing == FacingDirection.Left) sprite.position.x--;
        if (sprite.facing == FacingDirection.Right) sprite.position.x++;
        if (sprite.facing == FacingDirection.Up) sprite.position.y--;
        if (sprite.facing == FacingDirection.Down) sprite.position.y++;
      }

      sprite.movementStatus = MovementStatus.Ready;

      // Check to see if we've walked into a connecting map
      const connection = checkMapConnections(
        currentMap,
        sprite.position.x,
        sprite.position.y
      );

      if (connection) {
        if (onConnection) onConnection(connection);
        else
          throw Error(
            "Sprite walked into a connecting map, but no connection callback was given!"
          );
      }

      // Check to see if we've warped somewhere
      const warp = getWarpAtPos(
        currentMap,
        sprite.position.x,
        sprite.position.y
      );

      if (warp && onWarp) {
        onWarp(warp);
      }

      updateDebugState();
    }
  }
}
