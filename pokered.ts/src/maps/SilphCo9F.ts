import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_9F_BLOCKS } from "../data/blocks/SilphCo9F";

export const SilphCo9F: Map = {
  width: 13,
  height: 9,
  blocks: SILPH_CO_9F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
};
