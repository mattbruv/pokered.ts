import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_19_BLOCKS } from "../data/blocks/Route19";

export const Route19: Map = {
  width: 10,
  height: 27,
  blocks: ROUTE_19_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.FuchsiaCity, yOffset: -5 },
  west: { map: MapName.Route20, xOffset: 18 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
