import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BILLS_HOUSE_BLOCKS } from "../data/blocks/BillsHouse";

export const BillsHouse: Map = {
  width: 4,
  height: 4,
  blocks: BILLS_HOUSE_BLOCKS,
  tileset: Tileset.INTERIOR,
  connections: {},
  object: {},
  textPointers: [],
};
