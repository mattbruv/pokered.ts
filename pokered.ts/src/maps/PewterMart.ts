import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_MART_BLOCKS } from "../data/blocks/PewterMart";

export const PewterMart: Map = {
  width: 4,
  height: 4,
  blocks: PEWTER_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  object: {},
  textPointers: [],
};
