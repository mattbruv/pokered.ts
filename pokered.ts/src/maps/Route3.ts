import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_3_BLOCKS } from "../data/blocks/Route3";

export const Route3: Map = {
  width: 35,
  height: 9,
  blocks: ROUTE_3_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route4, yOffset: 25 },
  west: { map: MapName.PewterCity, xOffset: -4 }
},
  object: {},
  textPointers: [],
};
