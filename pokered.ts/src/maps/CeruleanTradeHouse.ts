import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_TRADE_HOUSE_BLOCKS } from "../data/blocks/CeruleanTradeHouse";

export const CeruleanTradeHouse: Map = {
  width: 4,
  height: 4,
  blocks: CERULEAN_TRADE_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
