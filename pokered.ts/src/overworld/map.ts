import { Map, MapConnections } from "../map";
import { getMap } from "../mapLookup";

type ConnectionDir = {
  dir: keyof MapConnections;
  newPosition: {
    x: number;
    y: number;
  };
};

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
    return {
      dir: "west",
      newPosition: { x: west.tileWidth - 1, y: tileY },
    };
  }
  if (tileX >= tileWidth)
    return {
      dir: "east",
      newPosition: { x: 0, y: tileY },
    };
  if (tileY >= tileHeight)
    return {
      dir: "south",
      newPosition: { x: tileX, y: 0 },
    };
  if (tileY < 0) {
    const north = getTileDimensions(getMap(map.connections.north!.map));
    return {
      dir: "north",
      newPosition: { x: tileX, y: north.tileHeight - 1 },
    };
  }

  // We are still in the map, do not return a connection
  return null;
}
