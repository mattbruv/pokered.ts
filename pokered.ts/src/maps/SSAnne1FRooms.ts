import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_1F_ROOMS_BLOCKS } from "../data/blocks/SSAnne1FRooms";

export const SSAnne1FRooms: Map = {
  width: 12,
  height: 8,
  blocks: SS_ANNE_1F_ROOMS_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
