import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BRUNOS_ROOM_BLOCKS } from "../data/blocks/BrunosRoom";

export const BrunosRoom: Map = {
  width: 5,
  height: 6,
  blocks: BRUNOS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
};
