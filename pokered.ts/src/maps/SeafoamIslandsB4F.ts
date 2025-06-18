import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B4F_BLOCKS } from "../data/blocks/SeafoamIslandsB4F";

export const SeafoamIslandsB4F: Map = {
  width: 15,
  height: 9,
  blocks: SEAFOAM_ISLANDS_B4F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
