import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_25_BLOCKS } from "../data/blocks/Route25";

export const Route25: Map = {
  width: 30,
  height: 9,
  blocks: ROUTE_25_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  west: { map: MapName.Route24, xOffset: 0 }
},
  object: {},
  textPointers: [],
};
