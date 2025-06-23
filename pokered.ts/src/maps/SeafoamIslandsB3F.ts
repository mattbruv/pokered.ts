import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B3F_BLOCKS } from "../data/blocks/SeafoamIslandsB3F";

export const SeafoamIslandsB3F: Map = {
  width: 15,
  height: 9,
  blocks: SEAFOAM_ISLANDS_B3F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
