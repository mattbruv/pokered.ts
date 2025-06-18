import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_EAST_BLOCKS } from "../data/blocks/SafariZoneEast";

export const SafariZoneEast: Map = {
  width: 15,
  height: 13,
  blocks: SAFARI_ZONE_EAST_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
