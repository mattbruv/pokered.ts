import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_CITY_BLOCKS } from "../data/blocks/VermilionCity";

export const VermilionCity: Map = {
  width: 20,
  height: 18,
  blocks: VERMILION_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route6, yOffset: 5 },
  east: { map: MapName.Route11, xOffset: 4 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
