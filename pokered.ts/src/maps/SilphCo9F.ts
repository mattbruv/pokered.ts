import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_9F_BLOCKS } from "../data/blocks/SilphCo9F";

export const SilphCo9F: Map = {
  width: 13,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_9F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 14, y: 0, toMap: "SILPH_CO_10F", warpId: 1 },
      { x: 16, y: 0, toMap: "SILPH_CO_8F", warpId: 1 },
      { x: 18, y: 0, toMap: "SILPH_CO_ELEVATOR", warpId: 1 },
      { x: 9, y: 3, toMap: "SILPH_CO_3F", warpId: 8 },
      { x: 17, y: 15, toMap: "SILPH_CO_5F", warpId: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 14,
        sprite: "SPRITE_NURSE",
        movement: "STAY",
        textId: "TEXT_SILPHCO9F_NURSE"
      },
      {
        type: "trainer",
        x: 2,
        y: 4,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO9F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 37
      },
      {
        type: "trainer",
        x: 21,
        y: 13,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_SILPHCO9F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 13,
        y: 16,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO9F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 38
      }
    ]
  },
  textPointers: []
};
