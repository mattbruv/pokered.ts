import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_WEST_BLOCKS } from "../data/blocks/SafariZoneWest";

export const SafariZoneWest: Map = {
  width: 15,
  height: 13,
  blocks: SAFARI_ZONE_WEST_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  object: {},
  textPointers: [],
};
