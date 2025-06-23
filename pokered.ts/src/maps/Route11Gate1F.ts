import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_11_GATE_1F_BLOCKS } from "../data/blocks/Route11Gate1F";

export const Route11Gate1F: Map = {
  width: 4,
  height: 5,
  blocks: ROUTE_11_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
