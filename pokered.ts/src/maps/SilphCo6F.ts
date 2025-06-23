import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_6F_BLOCKS } from "../data/blocks/SilphCo6F";

export const SilphCo6F: Map = {
  width: 13,
  height: 9,
  blocks: SILPH_CO_6F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
};
