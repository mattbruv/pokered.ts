import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_15_GATE_1F_BLOCKS } from "../data/blocks/Route15Gate1F";

export const Route15Gate1F: Map = {
  width: 4,
  height: 5,
  blocks: ROUTE_15_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
