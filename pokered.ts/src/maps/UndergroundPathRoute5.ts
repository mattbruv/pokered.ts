import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_5_BLOCKS } from "../data/blocks/UndergroundPathRoute5";

export const UndergroundPathRoute5: Map = {
  width: 4,
  height: 4,
  blocks: UNDERGROUND_PATH_ROUTE_5_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
