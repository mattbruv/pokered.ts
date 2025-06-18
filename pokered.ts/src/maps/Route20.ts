import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_20_BLOCKS } from "../data/blocks/Route20";

export const Route20: Map = {
  width: 50,
  height: 9,
  blocks: ROUTE_20_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  west: { map: MapName.CinnabarIsland, xOffset: 0 },
  east: { map: MapName.Route19, xOffset: -18 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
