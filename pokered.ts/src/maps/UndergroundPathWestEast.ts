import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_WEST_EAST_BLOCKS } from "../data/blocks/UndergroundPathWestEast";

export const UndergroundPathWestEast: Map = {
  width: 25,
  height: 4,
  blocks: UNDERGROUND_PATH_WEST_EAST_BLOCKS,
  tileset: Tileset.UNDERGROUND,
  connections: {},
  object: {},
  textPointers: [],
};
