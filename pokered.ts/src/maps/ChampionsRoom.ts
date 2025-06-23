import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CHAMPIONS_ROOM_BLOCKS } from "../data/blocks/ChampionsRoom";

export const ChampionsRoom: Map = {
  width: 4,
  height: 4,
  blocks: CHAMPIONS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
};
