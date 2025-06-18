import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_5F_BLOCKS } from "../data/blocks/CeladonMart5F";

export const CeladonMart5F: Map = {
  width: 10,
  height: 4,
  blocks: CELADON_MART_5F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
