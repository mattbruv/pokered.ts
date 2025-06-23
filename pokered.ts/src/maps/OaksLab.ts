import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { OAKS_LAB_BLOCKS } from "../data/blocks/OaksLab";

export const OaksLab: Map = {
  width: 5,
  height: 6,
  blocks: OAKS_LAB_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  object: {},
  textPointers: [],
};
