import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_POKECENTER_BLOCKS } from "../data/blocks/CeruleanPokecenter";

export const CeruleanPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: CERULEAN_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
};
