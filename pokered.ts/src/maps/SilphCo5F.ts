import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_5F_BLOCKS } from "../data/blocks/SilphCo5F";

export const SilphCo5F: Map = {
  width: 15,
  height: 9,
  blocks: SILPH_CO_5F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
};
