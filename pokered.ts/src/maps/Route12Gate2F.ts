import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_GATE_2F_BLOCKS } from "../data/blocks/Route12Gate2F";

export const Route12Gate2F: Map = {
  width: 4,
  height: 4,
  blocks: ROUTE_12_GATE_2F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
