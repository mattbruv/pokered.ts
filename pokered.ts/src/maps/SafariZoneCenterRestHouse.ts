import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_CENTER_REST_HOUSE_BLOCKS } from "../data/blocks/SafariZoneCenterRestHouse";

export const SafariZoneCenterRestHouse: Map = {
  width: 4,
  height: 4,
  blocks: SAFARI_ZONE_CENTER_REST_HOUSE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
