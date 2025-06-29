import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_7_BLOCKS } from "../data/blocks/Route7";

export const Route7: Map = {
  width: 10,
  height: 9,
  borderBlock: 15,
  blocks: ROUTE_7_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.CeladonCity, xOffset: -4 },
    east: { map: MapName.SaffronCity, xOffset: -4 }
  },
  objects: {
    warps: [
      { x: 18, y: 9, toMap: "ROUTE_7_GATE", warpId: 3 },
      { x: 18, y: 10, toMap: "ROUTE_7_GATE", warpId: 4 },
      { x: 11, y: 9, toMap: "ROUTE_7_GATE", warpId: 1 },
      { x: 11, y: 10, toMap: "ROUTE_7_GATE", warpId: 2 },
      { x: 5, y: 13, toMap: "UNDERGROUND_PATH_ROUTE_7", warpId: 1 }
    ],
    backgroundItems: [
      { x: 3, y: 13, signId: "TEXT_ROUTE7_UNDERGROUND_PATH_SIGN" }
    ],
    objects: []
  },
  textPointers: []
};
