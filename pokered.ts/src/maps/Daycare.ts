import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DAYCARE_BLOCKS } from "../data/blocks/Daycare";

export const Daycare: Map = {
  width: 4,
  height: 4,
  blocks: DAYCARE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
