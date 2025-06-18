import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_10_BLOCKS } from "../data/blocks/Route10";

export const Route10: Map = {
  width: 10,
  height: 36,
  blocks: ROUTE_10_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  south: { map: MapName.LavenderTown, yOffset: 0 },
  west: { map: MapName.Route9, xOffset: 0 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
