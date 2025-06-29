import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_B1F_BLOCKS } from "../data/blocks/MtMoonB1F";

export const MtMoonB1F: Map = {
  width: 14,
  height: 14,
  borderBlock: 3,
  blocks: MT_MOON_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 5, toMap: "MT_MOON_1F", warpId: 3 },
      { x: 17, y: 11, toMap: "MT_MOON_B2F", warpId: 1 },
      { x: 25, y: 9, toMap: "MT_MOON_1F", warpId: 4 },
      { x: 25, y: 15, toMap: "MT_MOON_1F", warpId: 5 },
      { x: 21, y: 17, toMap: "MT_MOON_B2F", warpId: 2 },
      { x: 13, y: 27, toMap: "MT_MOON_B2F", warpId: 3 },
      { x: 23, y: 3, toMap: "MT_MOON_B2F", warpId: 4 },
      { x: 27, y: 3, toMap: "LAST_MAP", warpId: 3 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
