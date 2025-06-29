import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { REDS_HOUSE_2F_BLOCKS } from "../data/blocks/RedsHouse2F";

export const RedsHouse2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: REDS_HOUSE_2F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_2,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 1, toMap: "REDS_HOUSE_1F", warpId: 3 }],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
