import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_8_BLOCKS } from "../data/blocks/Route8";

export const Route8: Map = {
  width: 30,
  height: 9,
  blocks: ROUTE_8_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  west: { map: MapName.SaffronCity, xOffset: -4 },
  east: { map: MapName.LavenderTown, xOffset: 0 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
