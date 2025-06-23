import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_POKECENTER_BLOCKS } from "../data/blocks/MtMoonPokecenter";

export const MtMoonPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: MT_MOON_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
};
