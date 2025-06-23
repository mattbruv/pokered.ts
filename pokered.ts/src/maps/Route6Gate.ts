import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_6_GATE_BLOCKS } from "../data/blocks/Route6Gate";

export const Route6Gate: Map = {
  width: 4,
  height: 3,
  blocks: ROUTE_6_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
