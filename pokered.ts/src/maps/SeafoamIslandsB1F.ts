import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B1F_BLOCKS } from "../data/blocks/SeafoamIslandsB1F";

export const SeafoamIslandsB1F: Map = {
  width: 15,
  height: 9,
  blocks: SEAFOAM_ISLANDS_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
