import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_22_GATE_BLOCKS } from "../data/blocks/Route22Gate";

export const Route22Gate: Map = {
  width: 5,
  height: 4,
  blocks: ROUTE_22_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
