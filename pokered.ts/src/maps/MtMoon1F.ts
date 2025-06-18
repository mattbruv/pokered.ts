import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_1F_BLOCKS } from "../data/blocks/MtMoon1F";

export const MtMoon1F: Map = {
  width: 20,
  height: 18,
  blocks: MT_MOON_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
