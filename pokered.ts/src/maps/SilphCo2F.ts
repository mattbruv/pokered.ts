import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_2F_BLOCKS } from "../data/blocks/SilphCo2F";

export const SilphCo2F: Map = {
  width: 15,
  height: 9,
  blocks: SILPH_CO_2F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
