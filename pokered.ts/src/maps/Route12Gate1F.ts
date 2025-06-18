import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_GATE_1F_BLOCKS } from "../data/blocks/Route12Gate1F";

export const Route12Gate1F: Map = {
  width: 5,
  height: 4,
  blocks: ROUTE_12_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
