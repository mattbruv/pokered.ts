import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_BLOCKS } from "../data/blocks/Route12";

export const Route12: Map = {
  width: 10,
  height: 54,
  blocks: ROUTE_12_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.LavenderTown, yOffset: 0 },
  south: { map: MapName.Route13, yOffset: -20 },
  west: { map: MapName.Route11, xOffset: 27 }
},
  object: {},
  textPointers: [],
};
