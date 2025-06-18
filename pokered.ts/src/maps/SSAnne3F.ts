import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_3F_BLOCKS } from "../data/blocks/SSAnne3F";

export const SSAnne3F: Map = {
  width: 10,
  height: 3,
  blocks: SS_ANNE_3F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
