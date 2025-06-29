import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DIGLETTS_CAVE_BLOCKS } from "../data/blocks/DiglettsCave";

export const DiglettsCave: Map = {
  width: 4,
  height: 4,
  borderBlock: 25,
  blocks: DIGLETTS_CAVE_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 5, toMap: "DIGLETTS_CAVE_ROUTE_2", warpId: 3 },
      { x: 37, y: 31, toMap: "DIGLETTS_CAVE_ROUTE_11", warpId: 3 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
