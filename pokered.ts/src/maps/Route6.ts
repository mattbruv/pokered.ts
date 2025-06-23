import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_6_BLOCKS } from "../data/blocks/Route6";

export const Route6: Map = {
  width: 10,
  height: 18,
  blocks: ROUTE_6_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.SaffronCity, yOffset: -5 },
  south: { map: MapName.VermilionCity, yOffset: -5 }
},
  object: {},
  textPointers: [],
};
