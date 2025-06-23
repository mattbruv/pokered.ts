import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B2F_BLOCKS } from "../data/blocks/SeafoamIslandsB2F";

export const SeafoamIslandsB2F: Map = {
  width: 15,
  height: 9,
  blocks: SEAFOAM_ISLANDS_B2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
