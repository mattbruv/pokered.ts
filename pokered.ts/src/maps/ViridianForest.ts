import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_FOREST_BLOCKS } from "../data/blocks/ViridianForest";

export const ViridianForest: Map = {
  width: 5,
  height: 4,
  blocks: VIRIDIAN_FOREST_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
