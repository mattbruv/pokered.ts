import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_3F_BLOCKS } from "../data/blocks/CeladonMart3F";

export const CeladonMart3F: Map = {
  width: 10,
  height: 4,
  blocks: CELADON_MART_3F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
};
