import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_GYM_BLOCKS } from "../data/blocks/SaffronGym";

export const SaffronGym: Map = {
  width: 10,
  height: 9,
  blocks: SAFFRON_GYM_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
