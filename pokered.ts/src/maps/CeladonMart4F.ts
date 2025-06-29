import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_4F_BLOCKS } from "../data/blocks/CeladonMart4F";

export const CeladonMart4F: Map = {
  width: 10,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_MART_4F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 12, y: 1, toMap: "CELADON_MART_3F", warpId: 1 },
      { x: 16, y: 1, toMap: "CELADON_MART_5F", warpId: 2 },
      { x: 1, y: 1, toMap: "CELADON_MART_ELEVATOR", warpId: 1 }
    ],
    backgroundItems: [
      { x: 14, y: 1, signId: "TEXT_CELADONMART4F_CURRENT_FLOOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 7,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_CELADONMART4F_CLERK"
      },
      {
        type: "sprite",
        x: 15,
        y: 5,
        sprite: "SPRITE_SUPER_NERD",
        movement: "WALK",
        textId: "TEXT_CELADONMART4F_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 5,
        y: 2,
        sprite: "SPRITE_YOUNGSTER",
        movement: "WALK",
        textId: "TEXT_CELADONMART4F_YOUNGSTER"
      }
    ]
  },
  textPointers: []
};
