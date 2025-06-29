import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_MART_BLOCKS } from "../data/blocks/PewterMart";

export const PewterMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: PEWTER_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 5 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_PEWTERMART_CLERK"
      },
      {
        type: "sprite",
        x: 3,
        y: 3,
        sprite: "SPRITE_YOUNGSTER",
        movement: "WALK",
        textId: "TEXT_PEWTERMART_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_PEWTERMART_SUPER_NERD"
      }
    ]
  },
  textPointers: []
};
