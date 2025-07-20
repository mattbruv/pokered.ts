import { GameInput, GameKey } from "../input/input";
import { Map, MapConnections, Warp } from "../map";
import { getMap } from "../mapLookup";
import { FacingDirection } from "../render/sprite";
import { getBlockSet, getTileCollisions, Tileset } from "../tileset";

type ConnectionDir = {
  dir: keyof MapConnections;
  newPosition: {
    x: number;
    y: number;
  };
};

export function getWarpAtPos(map: Map, x: number, y: number): Warp | undefined {
  return map.objects.warps.find((warp) => warp.x === x && warp.y === y);
}

export function getBlockIndexAtPosition(
  map: Map,
  x: number,
  y: number
): number {
  const yOffset = map.width * Math.floor(y / 2);
  const result = Math.floor(x / 2) + yOffset;
  return result;
}

export function isInBounds(map: Map, tileX: number, tileY: number) {
  const tileDims = getTileDimensions(map);
  return (
    tileX >= 0 &&
    tileX < tileDims.tileWidth &&
    tileY >= 0 &&
    tileY < tileDims.tileHeight
  );
}

type TileMeta = {
  blockIndex: number;
  blockX: number;
  blockY: number;
  tileX: number;
  tileY: number;
  tileId: number;
};

export type TileProbe =
  | ({
      inBounds: true;
      canWalk: boolean;
      canSurf: boolean;
    } & TileMeta)
  | { inBounds: false; canWalk: false; canSurf: false };

// See IsNextTileShoreOrWater
const WATER_TILESETS: Tileset[] = [
  Tileset.OVERWORLD,
  Tileset.FOREST,
  Tileset.DOJO,
  Tileset.GYM,
  Tileset.SHIP,
  Tileset.SHIP_PORT,
  Tileset.CAVERN,
  Tileset.FACILITY,
  Tileset.PLATEAU
];

type TilePair = [Tileset, number, number];

const TILE_PAIR_COLLISIONS_LAND: TilePair[] = [
  [Tileset.CAVERN, 0x20, 0x05],
  [Tileset.CAVERN, 0x41, 0x05],
  [Tileset.FOREST, 0x30, 0x2e],
  [Tileset.CAVERN, 0x2a, 0x05],
  [Tileset.CAVERN, 0x05, 0x21],
  [Tileset.FOREST, 0x52, 0x2e],
  [Tileset.FOREST, 0x55, 0x2e],
  [Tileset.FOREST, 0x56, 0x2e],
  [Tileset.FOREST, 0x20, 0x2e],
  [Tileset.FOREST, 0x5e, 0x2e],
  [Tileset.FOREST, 0x5f, 0x2e]
];

const TILE_PAIR_COLLISIONS_WATER: TilePair[] = [
  [Tileset.FOREST, 0x14, 0x2e],
  [Tileset.FOREST, 0x48, 0x2e],
  [Tileset.CAVERN, 0x14, 0x05]
];

type Ledge = [FacingDirection, number, number, GameKey];

const LEDGES: Ledge[] = [
  [FacingDirection.Down, 0x2c, 0x37, "Down"],
  [FacingDirection.Down, 0x39, 0x36, "Down"],
  [FacingDirection.Down, 0x39, 0x37, "Down"],
  [FacingDirection.Left, 0x2c, 0x27, "Left"],
  [FacingDirection.Left, 0x39, 0x27, "Left"],
  [FacingDirection.Right, 0x2c, 0x0d, "Right"],
  [FacingDirection.Right, 0x2c, 0x1d, "Right"],
  [FacingDirection.Right, 0x39, 0x0d, "Right"]
];

/** Check to see if the player is about to jump over a ledge */
export function isJumpingLedge(
  facing: FacingDirection,
  currentTileId: number,
  nextTileId: number
): Ledge | false {
  return (
    LEDGES.find(
      ([t1, t2, t3]) => t1 == facing && t2 == currentTileId && t3 == nextTileId
    ) ?? false
  );
}

/**
 * checks if the player is going to jump down a small ledge
 * and check for collisions that only occur between certain pairs of tiles
 * @returns True if there is a collision
 */
function checkForJumpingAndTilePairCollisions(
  tileset: Tileset,
  currentTile: TileProbe,
  nextTile: TileProbe
): boolean {
  // Return OK if there is no next tile
  if (!currentTile.inBounds || !nextTile.inBounds) return false;

  // If the player is currently surfing,
  // there is a different tile pair set
  const tilePairs =
    currentTile.canSurf || nextTile.canSurf
      ? TILE_PAIR_COLLISIONS_WATER
      : TILE_PAIR_COLLISIONS_LAND;

  // Check to see if the tileset/tile/next tile combo is in collidable combos
  return tilePairs.some(
    ([t1, t2, t3]) =>
      (t1 == tileset && t2 == currentTile.tileId && t3 == nextTile.tileId) ||
      // also the game seems to check inverse
      // For example, the above checks A -> B
      // but we also want to check if we're going from B -> A
      // SeafoamIslandsB2F has examples of these elevation changes in both directions
      (t1 == tileset && t3 == currentTile.tileId && t2 == nextTile.tileId)
  );
}

// See CollisionCheckOnLand
export function collisionLandCheck(
  tileset: Tileset,
  currentTile: TileProbe,
  nextTile: TileProbe
): boolean {
  // Check for ledge jumps or special tile pairs
  if (checkForJumpingAndTilePairCollisions(tileset, currentTile, nextTile)) {
    return true;
  }

  // Do single tile collision
  if (nextTile.canWalk) return false;
  if (nextTile.canSurf) return false;

  return true;
}

export function probeTile(map: Map, tileX: number, tileY: number): TileProbe {
  // If the user is about to walk about of bounds,
  // it means that they are about to walk over to a connecting map
  if (!isInBounds(map, tileX, tileY)) {
    // If we're not in bounds, we are probably walking to a connection, or walking OOB.
    // If this returns null, we are walking out of bounds, so prevent that.
    const connection = checkMapConnections(map, tileX, tileY);
    if (!connection)
      return {
        canWalk: false,
        canSurf: false,
        inBounds: false
      };
    // If there is a connection, we have to verify that we aren't walking onto a block which
    // isn't allowed to be walked on, AKA call this recursively with the connecting map.
    // Maybe not the best way to do this, but it's what's coming to mind right now.
    // An example of this is in the southwest of pallet town near the lake
    const connectingMapName = map.connections[connection.dir]?.map;
    if (!connectingMapName)
      return {
        canWalk: false,
        canSurf: false,
        inBounds: false
      };
    const { x, y } = connection.newPosition;
    return probeTile(getMap(connectingMapName), x, y);
  }

  const mapBlockIndex = getBlockIndexAtPosition(map, tileX, tileY);
  const blocksetIndex = map.blocks[mapBlockIndex];
  const blockset = getBlockSet(map.tileset);
  const block = blockset[blocksetIndex];
  const blockX = tileX % 2;
  const blockY = tileY % 2;

  // Collision is stored on a per-tile (8px tile) basis;
  // for instance only the bottom-left quadrant of a (16px) removable tree has the collision flag set,
  // and only the bottom-left quadrant of a door has it UNset.
  // For tiles in the upper half of a block,
  // Collision indices are 4, 6
  // For bottom half, indices are 12, 14
  // So this formula calculates the index based on which part of the block we're trying to enter.
  const tileIndex = blockY * 8 + 4 + blockX * 2;

  const tileId = block[tileIndex];
  const passableTiles = getTileCollisions(map.tileset);

  // See CollisionCheckOnWater
  const isWaterTile =
    tileId == 20 ||
    // either the left tile of the S.S. Anne boarding platform
    // or the tile on eastern coastlines (depending on the current tileset)
    (tileId == 50 && map.tileset !== Tileset.SHIP_PORT) ||
    tileId == 72; // tile on right on coast lines in Safari Zone

  const canSurf = WATER_TILESETS.includes(map.tileset) && isWaterTile;

  return {
    inBounds: true,
    canWalk: passableTiles.includes(tileId),
    canSurf,
    tileId: tileId,
    tileX,
    tileY,
    blockIndex: mapBlockIndex,
    blockX,
    blockY
  };
}

function getTileDimensions(map: Map) {
  // Map width/height is in blocks made up of 2x2 tiles,
  // so multiply by 2
  return {
    tileWidth: map.width * 2,
    tileHeight: map.height * 2
  };
}

// If we have gone out of bounds of the current map,
// get the new position and connection we moved into.
export function checkMapConnections(
  map: Map,
  tileX: number,
  tileY: number
): ConnectionDir | null {
  //console.log(map);
  const { tileWidth, tileHeight } = getTileDimensions(map);

  if (tileX < 0 && map.connections.west) {
    const west = getTileDimensions(getMap(map.connections.west.map));
    let offset = map.connections.west.yOffset * 2 * -1; // tiles
    return {
      dir: "west",
      newPosition: { x: west.tileWidth - 1, y: tileY + offset }
    };
  }
  if (tileX >= tileWidth && map.connections.east) {
    let offset = map.connections.east.yOffset * 2 * -1; // tiles
    return {
      dir: "east",
      newPosition: { x: 0, y: tileY + offset }
    };
  }
  if (tileY >= tileHeight && map.connections.south) {
    let offset = map.connections.south.xOffset * 2 * -1;
    return {
      dir: "south",
      newPosition: { x: tileX + offset, y: 0 }
    };
  }
  if (tileY < 0 && map.connections.north) {
    const north = getMap(map.connections.north.map);
    const northTile = getTileDimensions(north);
    let offset = map.connections.north.xOffset * 2;

    return {
      dir: "north",
      newPosition: {
        x: tileX - offset,
        y: northTile.tileHeight - 1
      }
    };
  }

  // We are still in the map, do not return a connection
  return null;
}
