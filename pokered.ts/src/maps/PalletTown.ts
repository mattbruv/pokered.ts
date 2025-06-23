import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PALLET_TOWN_BLOCKS } from "../data/blocks/PalletTown";

export const PalletTown: Map = {
  width: 10,
  height: 9,
  blocks: PALLET_TOWN_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route1, yOffset: 0 },
  south: { map: MapName.Route21, yOffset: 0 }
},
  object: {},
  textPointers: [],
};
