import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_2_TRADE_HOUSE_BLOCKS } from "../data/blocks/Route2TradeHouse";

export const Route2TradeHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_2_TRADE_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 3 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 4,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_ROUTE2TRADEHOUSE_SCIENTIST"
      },
      {
        type: "sprite",
        x: 4,
        y: 1,
        sprite: "SPRITE_GAMEBOY_KID",
        movement: "STAY",
        textId: "TEXT_ROUTE2TRADEHOUSE_GAMEBOY_KID"
      }
    ]
  },
  textPointers: []
};
