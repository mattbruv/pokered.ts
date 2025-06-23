import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_MART_BLOCKS } from "../data/blocks/LavenderMart";

export const LavenderMart: Map = {
  width: 4,
  height: 4,
  blocks: LAVENDER_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  object: {},
  textPointers: [],
};
