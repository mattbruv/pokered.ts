import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CAVE_2F_BLOCKS } from "../data/blocks/CeruleanCave2F";

export const CeruleanCave2F: Map = {
  width: 15,
  height: 9,
  blocks: CERULEAN_CAVE_2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
