import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_GYM_BLOCKS } from "../data/blocks/PewterGym";

export const PewterGym: Map = {
  width: 5,
  height: 7,
  blocks: PEWTER_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
};
