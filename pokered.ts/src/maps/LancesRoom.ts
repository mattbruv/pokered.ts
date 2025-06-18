import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LANCES_ROOM_BLOCKS } from "../data/blocks/LancesRoom";

export const LancesRoom: Map = {
  width: 13,
  height: 13,
  blocks: LANCES_ROOM_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
