import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_2F_BLOCKS } from "../data/blocks/SSAnne2F";

export const SSAnne2F: Map = {
  width: 20,
  height: 9,
  blocks: SS_ANNE_2F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
};
