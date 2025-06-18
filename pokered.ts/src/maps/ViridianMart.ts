import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_MART_BLOCKS } from "../data/blocks/ViridianMart";

export const ViridianMart: Map = {
  width: 4,
  height: 4,
  blocks: VIRIDIAN_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
