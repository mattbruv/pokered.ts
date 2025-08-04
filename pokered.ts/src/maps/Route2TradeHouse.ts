import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_2_TRADE_HOUSE_BLOCKS } from "../data/blocks/Route2TradeHouse";
import { OverworldSprite } from "../sprite";

export const Route2TradeHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_2_TRADE_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 4,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_ROUTE2TRADEHOUSE_SCIENTIST"
      },
      {
        type: "sprite",
        x: 4,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GAMEBOY_KID,
        movement: "STAY",
        textId: "TEXT_ROUTE2TRADEHOUSE_GAMEBOY_KID"
      }
    ]
  },
  text: {
    _Route2TradeHouseScientistText: [
      ["text", "A fainted #MON"],
      ["line", "can't fight. But, "],
      ["cont", "it can still use "],
      ["cont", "moves like CUT!"]
    ]
  }
};
