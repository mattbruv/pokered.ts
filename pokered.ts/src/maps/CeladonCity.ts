import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_CITY_BLOCKS } from "../data/blocks/CeladonCity";

export const CeladonCity: Map = {
  width: 25,
  height: 18,
  blocks: CELADON_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  west: { map: MapName.Route16, xOffset: 4 },
  east: { map: MapName.Route7, xOffset: 4 }
},
  object: {},
  textPointers: [],
};
