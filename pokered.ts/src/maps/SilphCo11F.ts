import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_11F_BLOCKS } from "../data/blocks/SilphCo11F";

export const SilphCo11F: Map = {
  width: 9,
  height: 9,
  blocks: SILPH_CO_11F_BLOCKS,
  tileset: Tileset.INTERIOR,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
