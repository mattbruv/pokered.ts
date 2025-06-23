import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_GATE_2F_BLOCKS } from "../data/blocks/Route16Gate2F";

export const Route16Gate2F: Map = {
  width: 4,
  height: 4,
  blocks: ROUTE_16_GATE_2F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
