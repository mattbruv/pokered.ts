import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_17_BLOCKS } from "../data/blocks/Route17";

export const Route17: Map = {
  width: 10,
  height: 72,
  blocks: ROUTE_17_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route16, yOffset: 0 },
  south: { map: MapName.Route18, yOffset: 0 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
