import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_B1F_BLOCKS } from "../data/blocks/SSAnneB1F";

export const SSAnneB1F: Map = {
  width: 15,
  height: 4,
  blocks: SS_ANNE_B1F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
