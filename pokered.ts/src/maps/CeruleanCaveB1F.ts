import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CAVE_B1F_BLOCKS } from "../data/blocks/CeruleanCaveB1F";

export const CeruleanCaveB1F: Map = {
  width: 15,
  height: 9,
  blocks: CERULEAN_CAVE_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
