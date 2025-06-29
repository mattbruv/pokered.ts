import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_NORTH_SOUTH_BLOCKS } from "../data/blocks/UndergroundPathNorthSouth";

export const UndergroundPathNorthSouth: Map = {
  width: 4,
  height: 24,
  borderBlock: 1,
  blocks: UNDERGROUND_PATH_NORTH_SOUTH_BLOCKS,
  tileset: Tileset.UNDERGROUND,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 4, toMap: "UNDERGROUND_PATH_ROUTE_5", warpId: 3 },
      { x: 2, y: 41, toMap: "UNDERGROUND_PATH_ROUTE_6", warpId: 3 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
