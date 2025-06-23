import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_1F_BLOCKS } from "../data/blocks/SeafoamIslands1F";

export const SeafoamIslands1F: Map = {
  width: 15,
  height: 9,
  blocks: SEAFOAM_ISLANDS_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
