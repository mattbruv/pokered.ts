import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_3F_BLOCKS } from "../data/blocks/SilphCo3F";

export const SilphCo3F: Map = {
  width: 15,
  height: 9,
  blocks: SILPH_CO_3F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
