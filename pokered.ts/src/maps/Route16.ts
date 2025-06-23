import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_BLOCKS } from "../data/blocks/Route16";

export const Route16: Map = {
  width: 20,
  height: 9,
  blocks: ROUTE_16_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  south: { map: MapName.Route17, yOffset: 0 },
  east: { map: MapName.CeladonCity, xOffset: -4 }
},
  object: {},
  textPointers: [],
};
