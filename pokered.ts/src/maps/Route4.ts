import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_4_BLOCKS } from "../data/blocks/Route4";

export const Route4: Map = {
  width: 45,
  height: 9,
  blocks: ROUTE_4_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  south: { map: MapName.Route3, yOffset: -25 },
  east: { map: MapName.CeruleanCity, xOffset: -4 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
