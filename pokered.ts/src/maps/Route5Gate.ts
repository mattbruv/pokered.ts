import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_5_GATE_BLOCKS } from "../data/blocks/Route5Gate";

export const Route5Gate: Map = {
  width: 4,
  height: 3,
  blocks: ROUTE_5_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
