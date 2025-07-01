import { Map, MapConnections, Warp } from "../map";
import { getMap } from "../mapLookup";
import { getBlockSet, getTileCollisions } from "../tileset";

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

export type TileProbe =
  | { inBounds: true; canWalk: boolean; tileId: number; canSurf: boolean }
  | { inBounds: false; canWalk: false; canSurf: false };

const SURF_TILES = [50, 20];

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

  return {
    inBounds: true,
    canWalk: passableTiles.includes(tileId),
    canSurf: SURF_TILES.includes(tileId),
    tileId: tileId
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
    let offset = map.connections.west.xOffset * 2 * -1; // tiles
    return {
      dir: "west",
      newPosition: { x: west.tileWidth - 1, y: tileY + offset }
    };
  }
  if (tileX >= tileWidth && map.connections.east) {
    let offset = map.connections.east.xOffset * 2 * -1; // tiles
    return {
      dir: "east",
      newPosition: { x: 0, y: tileY + offset }
    };
  }
  if (tileY >= tileHeight && map.connections.south) {
    let offset = map.connections.south.yOffset * 2 * -1;
    return {
      dir: "south",
      newPosition: { x: tileX + offset, y: 0 }
    };
  }
  if (tileY < 0 && map.connections.north) {
    const north = getMap(map.connections.north.map);
    const northTile = getTileDimensions(north);
    let offset = map.connections.north.yOffset * 2;

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
