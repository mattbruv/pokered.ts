import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MUSEUM_1F_BLOCKS } from "../data/blocks/Museum1F";

export const Museum1F: Map = {
  width: 10,
  height: 4,
  blocks: MUSEUM_1F_BLOCKS,
  tileset: Tileset.MUSEUM,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
