import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_GYM_BLOCKS } from "../data/blocks/ViridianGym";

export const ViridianGym: Map = {
  width: 10,
  height: 9,
  blocks: VIRIDIAN_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
};
