import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_7_BLOCKS } from "../data/blocks/UndergroundPathRoute7Copy";

export const UndergroundPathRoute7Copy: Map = {
  width: 4,
  height: 4,
  blocks: UNDERGROUND_PATH_ROUTE_7_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
