import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_GYM_BLOCKS } from "../data/blocks/CeruleanGym";

export const CeruleanGym: Map = {
  width: 5,
  height: 7,
  blocks: CERULEAN_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
