import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { COLOSSEUM_BLOCKS } from "../data/blocks/Colosseum";

export const Colosseum: Map = {
  width: 5,
  height: 4,
  blocks: COLOSSEUM_BLOCKS,
  tileset: Tileset.CLUB,
  connections: {},
  object: {},
  textPointers: [],
};
