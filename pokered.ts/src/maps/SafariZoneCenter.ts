import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_CENTER_BLOCKS } from "../data/blocks/SafariZoneCenter";

export const SafariZoneCenter: Map = {
  width: 15,
  height: 13,
  blocks: SAFARI_ZONE_CENTER_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  object: {},
  textPointers: [],
};
