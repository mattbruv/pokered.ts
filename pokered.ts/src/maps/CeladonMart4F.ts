import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_4F_BLOCKS } from "../data/blocks/CeladonMart4F";

export const CeladonMart4F: Map = {
  width: 10,
  height: 4,
  blocks: CELADON_MART_4F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
};
