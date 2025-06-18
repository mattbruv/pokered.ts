import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_NORTH_SOUTH_BLOCKS } from "../data/blocks/UndergroundPathNorthSouth";

export const UndergroundPathNorthSouth: Map = {
  width: 4,
  height: 24,
  blocks: UNDERGROUND_PATH_NORTH_SOUTH_BLOCKS,
  tileset: Tileset.UNDERGROUND,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
