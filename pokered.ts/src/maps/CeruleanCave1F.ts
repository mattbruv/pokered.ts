import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CAVE_1F_BLOCKS } from "../data/blocks/CeruleanCave1F";

export const CeruleanCave1F: Map = {
  width: 15,
  height: 9,
  blocks: CERULEAN_CAVE_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
