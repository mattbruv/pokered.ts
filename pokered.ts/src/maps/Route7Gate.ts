import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_7_GATE_BLOCKS } from "../data/blocks/Route7Gate";

export const Route7Gate: Map = {
  width: 3,
  height: 4,
  blocks: ROUTE_7_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
