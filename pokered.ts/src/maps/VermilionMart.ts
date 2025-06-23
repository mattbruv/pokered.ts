import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_MART_BLOCKS } from "../data/blocks/VermilionMart";

export const VermilionMart: Map = {
  width: 4,
  height: 4,
  blocks: VERMILION_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  object: {},
  textPointers: [],
};
