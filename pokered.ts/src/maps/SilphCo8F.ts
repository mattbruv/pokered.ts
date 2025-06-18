import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_8F_BLOCKS } from "../data/blocks/SilphCo8F";

export const SilphCo8F: Map = {
  width: 13,
  height: 9,
  blocks: SILPH_CO_8F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
