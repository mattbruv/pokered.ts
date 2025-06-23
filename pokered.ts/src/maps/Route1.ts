import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_1_BLOCKS } from "../data/blocks/Route1";

export const Route1: Map = {
  width: 10,
  height: 18,
  blocks: ROUTE_1_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.ViridianCity, yOffset: -5 },
  south: { map: MapName.PalletTown, yOffset: 0 }
},
  object: {},
  textPointers: [],
};
