import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_2_BLOCKS } from "../data/blocks/Route2";

export const Route2: Map = {
  width: 10,
  height: 36,
  blocks: ROUTE_2_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.PewterCity, yOffset: -5 },
  south: { map: MapName.ViridianCity, yOffset: -5 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
