import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_1F_BLOCKS } from "../data/blocks/SilphCo1F";

export const SilphCo1F: Map = {
  width: 15,
  height: 9,
  blocks: SILPH_CO_1F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
