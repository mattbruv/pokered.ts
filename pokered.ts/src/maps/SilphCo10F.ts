import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_10F_BLOCKS } from "../data/blocks/SilphCo10F";

export const SilphCo10F: Map = {
  width: 8,
  height: 9,
  blocks: SILPH_CO_10F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
};
