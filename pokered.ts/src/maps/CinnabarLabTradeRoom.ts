import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_LAB_TRADE_ROOM_BLOCKS } from "../data/blocks/CinnabarLabTradeRoom";

export const CinnabarLabTradeRoom: Map = {
  width: 4,
  height: 4,
  borderBlock: 23,
  blocks: CINNABAR_LAB_TRADE_ROOM_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "CINNABAR_LAB", warpId: 3 },
      { x: 3, y: 7, toMap: "CINNABAR_LAB", warpId: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 2,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_CINNABARLABTRADEROOM_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: "SPRITE_GRAMPS",
        movement: "STAY",
        textId: "TEXT_CINNABARLABTRADEROOM_GRAMPS"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        sprite: "SPRITE_BEAUTY",
        movement: "STAY",
        textId: "TEXT_CINNABARLABTRADEROOM_BEAUTY"
      }
    ]
  },
  textPointers: []
};
