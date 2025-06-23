import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_POKECENTER_BLOCKS } from "../data/blocks/SaffronPokecenter";

export const SaffronPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: SAFFRON_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
};
