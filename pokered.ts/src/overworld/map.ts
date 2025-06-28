import { Map, MapConnections } from "../map";
import { getMap } from "../mapLookup";
import { getBlockSet, getTileCollisions } from "../tileset";

type ConnectionDir = {
  dir: keyof MapConnections;
  newPosition: {
    x: number;
    y: number;
  };
};

export function getBlockIndexAtPosition(
  map: Map,
  x: number,
  y: number
): number {
  const yOffset = map.width * Math.floor(y / 2);
  const result = Math.floor(x / 2) + yOffset;
  return result;
}

export function canWalkOnTile(map: Map, tileX: number, tileY: number) {
  const mapBlockIndex = getBlockIndexAtPosition(map, tileX, tileY);
  const blocksetIndex = map.blocks[mapBlockIndex];
  const blockset = getBlockSet(map.tileset);
  const block = blockset[blocksetIndex];
  const blockX = tileX % 2;
  const blockY = tileY % 2;
  const tileIndex = blockY * 8 + blockX * 4;
  const tileId = block[tileIndex];
  const passableTiles = getTileCollisions(map.tileset);
  //console.log(blockX, blockY, block, tileIndex, "=", tileId);
  const row = Math.floor(tileId / 16);
  const column = tileId % 16;
  console.log(
    "tile: " + tileId,
    "pos: (" + row + "," + column,
    ") walkable?: " + passableTiles.includes(tileId),
    "block:",
    block
  );
  return passableTiles.includes(tileId);
}

function getTileDimensions(map: Map) {
  // Map width/height is in blocks made up of 2x2 tiles,
  // so multiply by 2
  return {
    tileWidth: map.width * 2,
    tileHeight: map.height * 2,
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

  if (tileX < 0) {
    const west = getTileDimensions(getMap(map.connections.west!.map));
    let offset = map.connections.west!.xOffset * 2 * -1; // tiles
    return {
      dir: "west",
      newPosition: { x: west.tileWidth - 1, y: tileY + offset },
    };
  }
  if (tileX >= tileWidth) {
    let offset = map.connections.east!.xOffset * 2 * -1; // tiles
    return {
      dir: "east",
      newPosition: { x: 0, y: tileY + offset },
    };
  }
  if (tileY >= tileHeight) {
    let offset = map.connections.south!.yOffset * 2 * -1;
    console.log(map.connections.south?.yOffset);
    return {
      dir: "south",
      newPosition: { x: tileX + offset, y: 0 },
    };
  }
  if (tileY < 0) {
    const north = getMap(map.connections.north!.map);
    const northTile = getTileDimensions(north);

    console.log("You are south, going north");
    console.log("north offset:", map.connections.north?.yOffset);

    let offset = map.connections.north!.yOffset * 2;

    return {
      dir: "north",
      newPosition: {
        x: tileX - offset,
        y: northTile.tileHeight - 1,
      },
    };
  }

  // We are still in the map, do not return a connection
  return null;
}
