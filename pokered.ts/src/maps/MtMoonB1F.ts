import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_B1F_BLOCKS } from "../data/blocks/MtMoonB1F";

export const MtMoonB1F: Map = {
  width: 14,
  height: 14,
  blocks: MT_MOON_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
