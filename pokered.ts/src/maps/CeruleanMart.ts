import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_MART_BLOCKS } from "../data/blocks/CeruleanMart";

export const CeruleanMart: Map = {
  width: 4,
  height: 4,
  blocks: CERULEAN_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  object: {},
  textPointers: [],
};
