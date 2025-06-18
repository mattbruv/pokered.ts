import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_4F_BLOCKS } from "../data/blocks/SilphCo4F";

export const SilphCo4F: Map = {
  width: 15,
  height: 9,
  blocks: SILPH_CO_4F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
