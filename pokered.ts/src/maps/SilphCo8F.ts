import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_8F_BLOCKS } from "../data/blocks/SilphCo8F";

export const SilphCo8F: Map = {
  width: 13,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_8F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 16, y: 0, toMap: "SILPH_CO_9F", warpId: 2 },
      { x: 14, y: 0, toMap: "SILPH_CO_7F", warpId: 1 },
      { x: 18, y: 0, toMap: "SILPH_CO_ELEVATOR", warpId: 1 },
      { x: 3, y: 11, toMap: "SILPH_CO_8F", warpId: 7 },
      { x: 3, y: 15, toMap: "SILPH_CO_2F", warpId: 5 },
      { x: 11, y: 5, toMap: "SILPH_CO_2F", warpId: 6 },
      { x: 11, y: 9, toMap: "SILPH_CO_8F", warpId: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_SILPHCO8F_SILPH_WORKER_M"
      },
      {
        type: "trainer",
        x: 19,
        y: 2,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO8F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 35
      },
      {
        type: "trainer",
        x: 10,
        y: 2,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_SILPHCO8F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 12,
        y: 15,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO8F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 36
      }
    ]
  },
  textPointers: []
};
