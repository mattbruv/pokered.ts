import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_TRADE_HOUSE_BLOCKS } from "../data/blocks/CeruleanTradeHouse";
import { OverworldSprite } from "../sprite";

export const CeruleanTradeHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: CERULEAN_TRADE_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 4,
        sprite: OverworldSprite.SPRITE_GRANNY,
        movement: "STAY",
        textId: "TEXT_CERULEANTRADEHOUSE_GRANNY"
      },
      {
        type: "sprite",
        x: 1,
        y: 2,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_CERULEANTRADEHOUSE_GAMBLER"
      }
    ]
  },
  textPointers: []
};
