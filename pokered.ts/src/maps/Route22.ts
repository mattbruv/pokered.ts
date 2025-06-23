import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_22_BLOCKS } from "../data/blocks/Route22";

export const Route22: Map = {
  width: 20,
  height: 9,
  blocks: ROUTE_22_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route23, yOffset: 0 },
  east: { map: MapName.ViridianCity, xOffset: -4 }
},
  object: {},
  textPointers: [],
};
