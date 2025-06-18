import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_11_BLOCKS } from "../data/blocks/Route11";

export const Route11: Map = {
  width: 30,
  height: 9,
  blocks: ROUTE_11_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  west: { map: MapName.VermilionCity, xOffset: -4 },
  east: { map: MapName.Route12, xOffset: -27 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
