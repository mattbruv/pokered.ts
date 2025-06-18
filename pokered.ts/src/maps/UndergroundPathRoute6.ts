import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_6_BLOCKS } from "../data/blocks/UndergroundPathRoute6";

export const UndergroundPathRoute6: Map = {
  width: 4,
  height: 4,
  blocks: UNDERGROUND_PATH_ROUTE_6_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
