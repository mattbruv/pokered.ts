import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_8_GATE_BLOCKS } from "../data/blocks/Route8Gate";

export const Route8Gate: Map = {
  width: 3,
  height: 4,
  blocks: ROUTE_8_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
