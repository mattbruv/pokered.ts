import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_POKECENTER_BLOCKS } from "../data/blocks/CeladonPokecenter";

export const CeladonPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: CELADON_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
};
