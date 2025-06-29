import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_B1F_BLOCKS } from "../data/blocks/SSAnneB1F";

export const SSAnneB1F: Map = {
  width: 15,
  height: 4,
  borderBlock: 12,
  blocks: SS_ANNE_B1F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 23, y: 3, toMap: "SS_ANNE_B1F_ROOMS", warpId: 9 },
      { x: 19, y: 3, toMap: "SS_ANNE_B1F_ROOMS", warpId: 7 },
      { x: 15, y: 3, toMap: "SS_ANNE_B1F_ROOMS", warpId: 5 },
      { x: 11, y: 3, toMap: "SS_ANNE_B1F_ROOMS", warpId: 3 },
      { x: 7, y: 3, toMap: "SS_ANNE_B1F_ROOMS", warpId: 1 },
      { x: 27, y: 5, toMap: "SS_ANNE_1F", warpId: 10 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
