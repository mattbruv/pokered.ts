import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_7_BLOCKS } from "../data/blocks/UndergroundPathRoute7";

export const UndergroundPathRoute7: Map = {
  width: 4,
  height: 4,
  blocks: UNDERGROUND_PATH_ROUTE_7_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
