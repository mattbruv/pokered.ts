import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { WARDENS_HOUSE_BLOCKS } from "../data/blocks/WardensHouse";

export const WardensHouse: Map = {
  width: 5,
  height: 4,
  blocks: WARDENS_HOUSE_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  object: {},
  textPointers: [],
};
