import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_CITY_BLOCKS } from "../data/blocks/PewterCity";

export const PewterCity: Map = {
  width: 20,
  height: 18,
  blocks: PEWTER_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  south: { map: MapName.Route2, yOffset: 5 },
  east: { map: MapName.Route3, xOffset: 4 }
},
  object: {},
  textPointers: [],
};
