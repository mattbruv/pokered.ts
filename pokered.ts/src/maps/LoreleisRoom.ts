import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LORELEIS_ROOM_BLOCKS } from "../data/blocks/LoreleisRoom";

export const LoreleisRoom: Map = {
  width: 5,
  height: 6,
  blocks: LORELEIS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
