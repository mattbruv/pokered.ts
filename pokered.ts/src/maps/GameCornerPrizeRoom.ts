import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { GAME_CORNER_PRIZE_ROOM_BLOCKS } from "../data/blocks/GameCornerPrizeRoom";

export const GameCornerPrizeRoom: Map = {
  width: 5,
  height: 4,
  borderBlock: 15,
  blocks: GAME_CORNER_PRIZE_ROOM_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 9 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpIndex: 9 }
    ],
    backgroundItems: [
      { x: 2, y: 2, signId: "TEXT_GAMECORNERPRIZEROOM_PRIZE_VENDOR_1" },
      { x: 4, y: 2, signId: "TEXT_GAMECORNERPRIZEROOM_PRIZE_VENDOR_2" },
      { x: 6, y: 2, signId: "TEXT_GAMECORNERPRIZEROOM_PRIZE_VENDOR_3" }
    ],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: "SPRITE_BALDING_GUY",
        movement: "STAY",
        textId: "TEXT_GAMECORNERPRIZEROOM_BALDING_GUY"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        sprite: "SPRITE_GAMBLER",
        movement: "WALK",
        textId: "TEXT_GAMECORNERPRIZEROOM_GAMBLER"
      }
    ]
  },
  textPointers: []
};
