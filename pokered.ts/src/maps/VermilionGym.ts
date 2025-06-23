import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_GYM_BLOCKS } from "../data/blocks/VermilionGym";

export const VermilionGym: Map = {
  width: 5,
  height: 9,
  blocks: VERMILION_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
};
