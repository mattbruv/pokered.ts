import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_6F_BLOCKS } from "../data/blocks/SilphCo6F";

export const SilphCo6F: Map = {
  width: 13,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_6F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 16, y: 0, toMap: "SILPH_CO_7F", warpId: 2 },
      { x: 14, y: 0, toMap: "SILPH_CO_5F", warpId: 1 },
      { x: 18, y: 0, toMap: "SILPH_CO_ELEVATOR", warpId: 1 },
      { x: 3, y: 3, toMap: "SILPH_CO_4F", warpId: 5 },
      { x: 23, y: 3, toMap: "SILPH_CO_2F", warpId: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 6,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_M1"
      },
      {
        type: "sprite",
        x: 20,
        y: 6,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_M2"
      },
      {
        type: "sprite",
        x: 21,
        y: 6,
        sprite: "SPRITE_SILPH_WORKER_F",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_F1"
      },
      {
        type: "sprite",
        x: 11,
        y: 10,
        sprite: "SPRITE_SILPH_WORKER_F",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_F2"
      },
      {
        type: "sprite",
        x: 18,
        y: 13,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_M3"
      },
      {
        type: "trainer",
        x: 17,
        y: 3,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 30
      },
      {
        type: "trainer",
        x: 7,
        y: 8,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 14,
        y: 15,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 31
      },
      {
        type: "item",
        x: 3,
        y: 12,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_HP_UP",
        itemId: "HP_UP"
      },
      {
        type: "item",
        x: 2,
        y: 15,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_X_ACCURACY",
        itemId: "X_ACCURACY"
      }
    ]
  },
  textPointers: []
};
