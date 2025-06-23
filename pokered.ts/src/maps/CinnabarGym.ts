import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_GYM_BLOCKS } from "../data/blocks/CinnabarGym";

export const CinnabarGym: Map = {
  width: 10,
  height: 9,
  blocks: CINNABAR_GYM_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
};
