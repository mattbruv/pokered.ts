import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_2F_BLOCKS } from "../data/blocks/SSAnne2F";

export const SSAnne2F: Map = {
  width: 20,
  height: 9,
  borderBlock: 12,
  blocks: SS_ANNE_2F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 9, y: 11, toMap: "SS_ANNE_2F_ROOMS", warpId: 1 },
      { x: 13, y: 11, toMap: "SS_ANNE_2F_ROOMS", warpId: 3 },
      { x: 17, y: 11, toMap: "SS_ANNE_2F_ROOMS", warpId: 5 },
      { x: 21, y: 11, toMap: "SS_ANNE_2F_ROOMS", warpId: 7 },
      { x: 25, y: 11, toMap: "SS_ANNE_2F_ROOMS", warpId: 9 },
      { x: 29, y: 11, toMap: "SS_ANNE_2F_ROOMS", warpId: 11 },
      { x: 2, y: 4, toMap: "SS_ANNE_1F", warpId: 9 },
      { x: 2, y: 12, toMap: "SS_ANNE_3F", warpId: 2 },
      { x: 36, y: 4, toMap: "SS_ANNE_CAPTAINS_ROOM", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 7,
        sprite: "SPRITE_WAITER",
        movement: "WALK",
        textId: "TEXT_SSANNE2F_WAITER"
      },
      {
        type: "trainer",
        x: 36,
        y: 4,
        sprite: "SPRITE_BLUE",
        movement: "STAY",
        textId: "TEXT_SSANNE2F_RIVAL",
        trainerId: "OPP_RIVAL1",
        trainerLevel: 1
      }
    ]
  },
  textPointers: []
};
