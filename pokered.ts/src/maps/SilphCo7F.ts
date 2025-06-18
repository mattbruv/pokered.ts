import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_7F_BLOCKS } from "../data/blocks/SilphCo7F";

export const SilphCo7F: Map = {
  width: 13,
  height: 9,
  blocks: SILPH_CO_7F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
