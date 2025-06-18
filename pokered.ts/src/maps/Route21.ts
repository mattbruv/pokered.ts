import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_21_BLOCKS } from "../data/blocks/Route21";

export const Route21: Map = {
  width: 10,
  height: 45,
  blocks: ROUTE_21_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.PalletTown, yOffset: 0 },
  south: { map: MapName.CinnabarIsland, yOffset: 0 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
