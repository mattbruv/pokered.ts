import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_9_BLOCKS } from "../data/blocks/Route9";

export const Route9: Map = {
  width: 30,
  height: 9,
  blocks: ROUTE_9_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  west: { map: MapName.CeruleanCity, xOffset: -4 },
  east: { map: MapName.Route10, xOffset: 0 }
},
  object: {},
  textPointers: [],
};
