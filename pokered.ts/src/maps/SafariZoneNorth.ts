import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_NORTH_BLOCKS } from "../data/blocks/SafariZoneNorth";

export const SafariZoneNorth: Map = {
  width: 20,
  height: 18,
  blocks: SAFARI_ZONE_NORTH_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  object: {},
  textPointers: [],
};
