import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_MART_BLOCKS } from "../data/blocks/FuchsiaMart";

export const FuchsiaMart: Map = {
  width: 4,
  height: 4,
  blocks: FUCHSIA_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
