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
      { x: 9, y: 11, toMap: MapName.SSAnne2FRooms, warpId: 1 },
      { x: 13, y: 11, toMap: MapName.SSAnne2FRooms, warpId: 3 },
      { x: 17, y: 11, toMap: MapName.SSAnne2FRooms, warpId: 5 },
      { x: 21, y: 11, toMap: MapName.SSAnne2FRooms, warpId: 7 },
      { x: 25, y: 11, toMap: MapName.SSAnne2FRooms, warpId: 9 },
      { x: 29, y: 11, toMap: MapName.SSAnne2FRooms, warpId: 11 },
      { x: 2, y: 4, toMap: MapName.SSAnne1F, warpId: 9 },
      { x: 2, y: 12, toMap: MapName.SSAnne3F, warpId: 2 },
      { x: 36, y: 4, toMap: MapName.SSAnneCaptainsRoom, warpId: 1 }
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
