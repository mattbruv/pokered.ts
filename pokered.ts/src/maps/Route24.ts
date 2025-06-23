import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_24_BLOCKS } from "../data/blocks/Route24";

export const Route24: Map = {
  width: 10,
  height: 18,
  blocks: ROUTE_24_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  south: { map: MapName.CeruleanCity, yOffset: -5 },
  east: { map: MapName.Route25, xOffset: 0 }
},
  object: {},
  textPointers: [],
};
