import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_WEST_EAST_BLOCKS } from "../data/blocks/UndergroundPathWestEast";

export const UndergroundPathWestEast: Map = {
  width: 25,
  height: 4,
  borderBlock: 1,
  blocks: UNDERGROUND_PATH_WEST_EAST_BLOCKS,
  tileset: Tileset.UNDERGROUND,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 5, toMap: MapName.UndergroundPathRoute7, warpId: 3 },
      { x: 47, y: 2, toMap: MapName.UndergroundPathRoute8, warpId: 3 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
