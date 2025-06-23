import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_2_TRADE_HOUSE_BLOCKS } from "../data/blocks/Route2TradeHouse";

export const Route2TradeHouse: Map = {
  width: 4,
  height: 4,
  blocks: ROUTE_2_TRADE_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
