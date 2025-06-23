import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { GAME_CORNER_PRIZE_ROOM_BLOCKS } from "../data/blocks/GameCornerPrizeRoom";

export const GameCornerPrizeRoom: Map = {
  width: 5,
  height: 4,
  blocks: GAME_CORNER_PRIZE_ROOM_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
};
