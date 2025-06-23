import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_B2F_BLOCKS } from "../data/blocks/MtMoonB2F";

export const MtMoonB2F: Map = {
  width: 20,
  height: 18,
  blocks: MT_MOON_B2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
