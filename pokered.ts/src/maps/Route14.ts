import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_14_BLOCKS } from "../data/blocks/Route14";

export const Route14: Map = {
  width: 10,
  height: 27,
  blocks: ROUTE_14_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  west: { map: MapName.Route15, xOffset: 18 },
  east: { map: MapName.Route13, xOffset: 0 }
},
  object: {},
  textPointers: [],
};
