import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_TRADE_HOUSE_BLOCKS } from "../data/blocks/VermilionTradeHouse";

export const VermilionTradeHouse: Map = {
  width: 4,
  height: 4,
  blocks: VERMILION_TRADE_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
