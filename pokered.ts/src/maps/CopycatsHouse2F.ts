import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { COPYCATS_HOUSE_2F_BLOCKS } from "../data/blocks/CopycatsHouse2F";

export const CopycatsHouse2F: Map = {
  width: 4,
  height: 4,
  blocks: COPYCATS_HOUSE_2F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_2,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
