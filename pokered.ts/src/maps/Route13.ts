import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_13_BLOCKS } from "../data/blocks/Route13";

export const Route13: Map = {
  width: 30,
  height: 9,
  blocks: ROUTE_13_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route12, yOffset: 20 },
  west: { map: MapName.Route14, xOffset: 0 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
