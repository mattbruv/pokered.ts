import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { GAME_CORNER_BLOCKS } from "../data/blocks/GameCorner";

export const GameCorner: Map = {
  width: 10,
  height: 9,
  blocks: GAME_CORNER_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
