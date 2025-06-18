import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_2F_BLOCKS } from "../data/blocks/CeladonMart2F";

export const CeladonMart2F: Map = {
  width: 10,
  height: 4,
  blocks: CELADON_MART_2F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
