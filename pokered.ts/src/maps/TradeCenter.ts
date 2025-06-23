import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { TRADE_CENTER_BLOCKS } from "../data/blocks/TradeCenter";

export const TradeCenter: Map = {
  width: 5,
  height: 4,
  blocks: TRADE_CENTER_BLOCKS,
  tileset: Tileset.CLUB,
  connections: {},
  object: {},
  textPointers: [],
};
