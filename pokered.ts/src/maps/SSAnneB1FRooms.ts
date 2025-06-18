import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_B1F_ROOMS_BLOCKS } from "../data/blocks/SSAnneB1FRooms";

export const SSAnneB1FRooms: Map = {
  width: 12,
  height: 8,
  blocks: SS_ANNE_B1F_ROOMS_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
