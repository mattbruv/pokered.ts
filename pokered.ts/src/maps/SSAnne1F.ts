import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_1F_BLOCKS } from "../data/blocks/SSAnne1F";

export const SSAnne1F: Map = {
  width: 20,
  height: 9,
  blocks: SS_ANNE_1F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
};
