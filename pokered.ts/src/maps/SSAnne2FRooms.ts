import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_2F_ROOMS_BLOCKS } from "../data/blocks/SSAnne2FRooms";

export const SSAnne2FRooms: Map = {
  width: 12,
  height: 8,
  blocks: SS_ANNE_2F_ROOMS_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
};
