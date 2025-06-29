import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { TRADE_CENTER_BLOCKS } from "../data/blocks/TradeCenter";

export const TradeCenter: Map = {
  width: 5,
  height: 4,
  borderBlock: 14,
  blocks: TRADE_CENTER_BLOCKS,
  tileset: Tileset.CLUB,
  connections: {},
  objects: {
    warps: [],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 2,
        sprite: "SPRITE_RED",
        movement: "STAY",
        textId: "TEXT_TRADECENTER_OPPONENT"
      }
    ]
  },
  textPointers: []
};
