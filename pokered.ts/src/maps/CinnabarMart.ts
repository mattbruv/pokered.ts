import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_MART_BLOCKS } from "../data/blocks/CinnabarMart";

export const CinnabarMart: Map = {
  width: 4,
  height: 4,
  blocks: CINNABAR_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  object: {},
  textPointers: [],
};
