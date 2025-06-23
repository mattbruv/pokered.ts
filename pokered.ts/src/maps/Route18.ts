import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_18_BLOCKS } from "../data/blocks/Route18";

export const Route18: Map = {
  width: 25,
  height: 9,
  blocks: ROUTE_18_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route17, yOffset: 0 },
  east: { map: MapName.FuchsiaCity, xOffset: -4 }
},
  object: {},
  textPointers: [],
};
