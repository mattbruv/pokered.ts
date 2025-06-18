import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_8_BLOCKS } from "../data/blocks/UndergroundPathRoute8";

export const UndergroundPathRoute8: Map = {
  width: 4,
  height: 4,
  blocks: UNDERGROUND_PATH_ROUTE_8_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
