import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_LAB_BLOCKS } from "../data/blocks/CinnabarLab";

export const CinnabarLab: Map = {
  width: 9,
  height: 4,
  blocks: CINNABAR_LAB_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  object: {},
  textPointers: [],
};
