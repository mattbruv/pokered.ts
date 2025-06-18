import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_CITY_BLOCKS } from "../data/blocks/FuchsiaCity";

export const FuchsiaCity: Map = {
  width: 20,
  height: 18,
  blocks: FUCHSIA_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  south: { map: MapName.Route19, yOffset: 5 },
  west: { map: MapName.Route18, xOffset: 4 },
  east: { map: MapName.Route15, xOffset: 4 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
