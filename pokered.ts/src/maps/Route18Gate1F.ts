import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_18_GATE_1F_BLOCKS } from "../data/blocks/Route18Gate1F";

export const Route18Gate1F: Map = {
  width: 4,
  height: 5,
  blocks: ROUTE_18_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
