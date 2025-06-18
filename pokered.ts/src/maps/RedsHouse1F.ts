import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { REDS_HOUSE_1F_BLOCKS } from "../data/blocks/RedsHouse1F";

export const RedsHouse1F: Map = {
  width: 4,
  height: 4,
  blocks: REDS_HOUSE_1F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_1,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
