import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_1F_BLOCKS } from "../data/blocks/CeladonMart1F";

export const CeladonMart1F: Map = {
  width: 10,
  height: 4,
  blocks: CELADON_MART_1F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
