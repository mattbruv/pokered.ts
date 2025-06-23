import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_15_BLOCKS } from "../data/blocks/Route15";

export const Route15: Map = {
  width: 30,
  height: 9,
  blocks: ROUTE_15_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  west: { map: MapName.FuchsiaCity, xOffset: -4 },
  east: { map: MapName.Route14, xOffset: -18 }
},
  object: {},
  textPointers: [],
};
