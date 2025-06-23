import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_CUBONE_HOUSE_BLOCKS } from "../data/blocks/LavenderCuboneHouse";

export const LavenderCuboneHouse: Map = {
  width: 4,
  height: 4,
  blocks: LAVENDER_CUBONE_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
