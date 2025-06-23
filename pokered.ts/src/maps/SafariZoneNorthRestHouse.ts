import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_NORTH_REST_HOUSE_BLOCKS } from "../data/blocks/SafariZoneNorthRestHouse";

export const SafariZoneNorthRestHouse: Map = {
  width: 4,
  height: 4,
  blocks: SAFARI_ZONE_NORTH_REST_HOUSE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
