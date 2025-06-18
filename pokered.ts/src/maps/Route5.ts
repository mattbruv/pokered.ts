import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_5_BLOCKS } from "../data/blocks/Route5";

export const Route5: Map = {
  width: 10,
  height: 18,
  blocks: ROUTE_5_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.CeruleanCity, yOffset: -5 },
  south: { map: MapName.SaffronCity, yOffset: -5 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
