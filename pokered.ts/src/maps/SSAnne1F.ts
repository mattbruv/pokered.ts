import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_1F_BLOCKS } from "../data/blocks/SSAnne1F";

export const SSAnne1F: Map = {
  width: 20,
  height: 9,
  borderBlock: 12,
  blocks: SS_ANNE_1F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 26, y: 0, toMap: MapName.VermilionDock, warpId: 2 },
      { x: 27, y: 0, toMap: MapName.VermilionDock, warpId: 2 },
      { x: 31, y: 8, toMap: MapName.SSAnne1FRooms, warpId: 1 },
      { x: 23, y: 8, toMap: MapName.SSAnne1FRooms, warpId: 2 },
      { x: 19, y: 8, toMap: MapName.SSAnne1FRooms, warpId: 3 },
      { x: 15, y: 8, toMap: MapName.SSAnne1FRooms, warpId: 4 },
      { x: 11, y: 8, toMap: MapName.SSAnne1FRooms, warpId: 5 },
      { x: 7, y: 8, toMap: MapName.SSAnne1FRooms, warpId: 6 },
      { x: 2, y: 6, toMap: MapName.SSAnne2F, warpId: 7 },
      { x: 37, y: 15, toMap: MapName.SSAnneB1F, warpId: 6 },
      { x: 3, y: 16, toMap: MapName.SSAnneKitchen, warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 12,
        y: 6,
        sprite: "SPRITE_WAITER",
        movement: "WALK",
        textId: "TEXT_SSANNE1F_WAITER"
      },
      {
        type: "sprite",
        x: 27,
        y: 5,
        sprite: "SPRITE_SAILOR",
        movement: "STAY",
        textId: "TEXT_SSANNE1F_SAILOR"
      }
    ]
  },
  textPointers: []
};
