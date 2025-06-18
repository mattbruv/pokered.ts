import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_7_BLOCKS } from "../data/blocks/Route7";

export const Route7: Map = {
  width: 10,
  height: 9,
  blocks: ROUTE_7_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  west: { map: MapName.CeladonCity, xOffset: -4 },
  east: { map: MapName.SaffronCity, xOffset: -4 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
