import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_CITY_BLOCKS } from "../data/blocks/SaffronCity";

export const SaffronCity: Map = {
  width: 20,
  height: 18,
  blocks: SAFFRON_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route5, yOffset: 5 },
  south: { map: MapName.Route6, yOffset: 5 },
  west: { map: MapName.Route7, xOffset: 4 },
  east: { map: MapName.Route8, xOffset: 4 }
},
  object: {},
  textPointers: [],
};
