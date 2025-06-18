import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_GATE_1F_BLOCKS } from "../data/blocks/Route16Gate1F";

export const Route16Gate1F: Map = {
  width: 4,
  height: 7,
  blocks: ROUTE_16_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
