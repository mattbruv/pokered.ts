import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_23_BLOCKS } from "../data/blocks/Route23";

export const Route23: Map = {
  width: 10,
  height: 72,
  blocks: ROUTE_23_BLOCKS,
  tileset: Tileset.PLATEAU,
  connections: {
  north: { map: MapName.IndigoPlateau, yOffset: 0 },
  south: { map: MapName.Route22, yOffset: 0 }
},
  object: {},
  textPointers: [],
};
