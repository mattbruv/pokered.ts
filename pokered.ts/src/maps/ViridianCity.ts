import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_CITY_BLOCKS } from "../data/blocks/ViridianCity";

export const ViridianCity: Map = {
  width: 20,
  height: 18,
  blocks: VIRIDIAN_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route2, yOffset: 5 },
  south: { map: MapName.Route1, yOffset: 5 },
  west: { map: MapName.Route22, xOffset: 4 }
},
  object: {},
  textPointers: [],
};
