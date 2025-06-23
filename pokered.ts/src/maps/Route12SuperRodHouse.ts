import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_SUPER_ROD_HOUSE_BLOCKS } from "../data/blocks/Route12SuperRodHouse";

export const Route12SuperRodHouse: Map = {
  width: 4,
  height: 4,
  blocks: ROUTE_12_SUPER_ROD_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
