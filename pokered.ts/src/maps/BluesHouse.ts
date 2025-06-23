import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BLUES_HOUSE_BLOCKS } from "../data/blocks/BluesHouse";

export const BluesHouse: Map = {
  width: 4,
  height: 4,
  blocks: BLUES_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
