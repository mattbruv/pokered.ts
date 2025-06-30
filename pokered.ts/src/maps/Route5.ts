import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_5_BLOCKS } from "../data/blocks/Route5";

export const Route5: Map = {
  width: 10,
  height: 18,
  borderBlock: 10,
  blocks: ROUTE_5_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.CeruleanCity, yOffset: -5 },
    south: { map: MapName.SaffronCity, yOffset: -5 }
  },
  objects: {
    warps: [
      { x: 10, y: 29, toMap: MapName.Route5Gate, warpId: 4 },
      { x: 9, y: 29, toMap: MapName.Route5Gate, warpId: 3 },
      { x: 10, y: 33, toMap: MapName.Route5Gate, warpId: 1 },
      { x: 17, y: 27, toMap: MapName.UndergroundPathRoute5, warpId: 1 },
      { x: 10, y: 21, toMap: MapName.Daycare, warpId: 1 }
    ],
    backgroundItems: [
      { x: 17, y: 29, signId: "TEXT_ROUTE5_UNDERGROUND_PATH_SIGN" }
    ],
    objects: []
  },
  textPointers: []
};
