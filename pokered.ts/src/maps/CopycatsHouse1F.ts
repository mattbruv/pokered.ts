import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { COPYCATS_HOUSE_1F_BLOCKS } from "../data/blocks/CopycatsHouse1F";

export const CopycatsHouse1F: Map = {
  width: 4,
  height: 4,
  blocks: COPYCATS_HOUSE_1F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_1,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
