import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CITY_BLOCKS } from "../data/blocks/CeruleanCity";

export const CeruleanCity: Map = {
  width: 20,
  height: 18,
  blocks: CERULEAN_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route24, yOffset: 5 },
  south: { map: MapName.Route5, yOffset: 5 },
  west: { map: MapName.Route4, xOffset: 4 },
  east: { map: MapName.Route9, xOffset: 4 }
},
  object: {},
  textPointers: [],
};
