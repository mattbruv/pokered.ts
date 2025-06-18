import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_BOW_BLOCKS } from "../data/blocks/SSAnneBow";

export const SSAnneBow: Map = {
  width: 10,
  height: 7,
  blocks: SS_ANNE_BOW_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
