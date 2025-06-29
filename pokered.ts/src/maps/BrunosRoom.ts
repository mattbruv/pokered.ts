import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BRUNOS_ROOM_BLOCKS } from "../data/blocks/BrunosRoom";

export const BrunosRoom: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: BRUNOS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: "LORELEIS_ROOM", warpId: 3 },
      { x: 5, y: 11, toMap: "LORELEIS_ROOM", warpId: 4 },
      { x: 4, y: 0, toMap: "AGATHAS_ROOM", warpId: 1 },
      { x: 5, y: 0, toMap: "AGATHAS_ROOM", warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 2,
        sprite: "SPRITE_BRUNO",
        movement: "STAY",
        textId: "TEXT_BRUNOSROOM_BRUNO",
        trainerId: "OPP_BRUNO",
        trainerLevel: 1
      }
    ]
  },
  textPointers: []
};
