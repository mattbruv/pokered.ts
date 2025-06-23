import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_2_GATE_BLOCKS } from "../data/blocks/Route2Gate";

export const Route2Gate: Map = {
  width: 5,
  height: 4,
  blocks: ROUTE_2_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
