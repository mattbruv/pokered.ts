import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_MART_BLOCKS } from "../data/blocks/SaffronMart";

export const SaffronMart: Map = {
  width: 4,
  height: 4,
  blocks: SAFFRON_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
