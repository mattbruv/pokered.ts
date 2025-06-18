import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_GYM_BLOCKS } from "../data/blocks/CeladonGym";

export const CeladonGym: Map = {
  width: 5,
  height: 9,
  blocks: CELADON_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
