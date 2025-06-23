import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { AGATHAS_ROOM_BLOCKS } from "../data/blocks/AgathasRoom";

export const AgathasRoom: Map = {
  width: 5,
  height: 6,
  blocks: AGATHAS_ROOM_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  object: {},
  textPointers: [],
};
