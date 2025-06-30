import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_LAB_BLOCKS } from "../data/blocks/CinnabarLab";

export const CinnabarLab: Map = {
  width: 9,
  height: 4,
  borderBlock: 23,
  blocks: CINNABAR_LAB_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 3 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 3 },
      { x: 8, y: 4, toMap: MapName.CinnabarLabTradeRoom, warpId: 1 },
      { x: 12, y: 4, toMap: MapName.CinnabarLabMetronomeRoom, warpId: 1 },
      { x: 16, y: 4, toMap: MapName.CinnabarLabFossilRoom, warpId: 1 }
    ],
    backgroundItems: [
      { x: 3, y: 2, signId: "TEXT_CINNABARLAB_PHOTO" },
      { x: 9, y: 4, signId: "TEXT_CINNABARLAB_MEETING_ROOM_SIGN" },
      { x: 13, y: 4, signId: "TEXT_CINNABARLAB_R_AND_D_SIGN" },
      { x: 17, y: 4, signId: "TEXT_CINNABARLAB_TESTING_ROOM_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 3,
        sprite: "SPRITE_FISHING_GURU",
        movement: "STAY",
        textId: "TEXT_CINNABARLAB_FISHING_GURU"
      }
    ]
  },
  textPointers: []
};
