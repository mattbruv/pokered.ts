import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_TRADE_HOUSE_BLOCKS } from "../data/blocks/VermilionTradeHouse";

export const VermilionTradeHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: VERMILION_TRADE_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 8 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 8 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 5,
        sprite: "SPRITE_LITTLE_GIRL",
        movement: "STAY",
        textId: "TEXT_VERMILIONTRADEHOUSE_LITTLE_GIRL"
      }
    ]
  },
  textPointers: []
};
