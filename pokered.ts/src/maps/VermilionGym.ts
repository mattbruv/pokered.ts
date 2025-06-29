import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_GYM_BLOCKS } from "../data/blocks/VermilionGym";

export const VermilionGym: Map = {
  width: 5,
  height: 9,
  borderBlock: 3,
  blocks: VERMILION_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 17, toMap: "LAST_MAP", warpId: 4 },
      { x: 5, y: 17, toMap: "LAST_MAP", warpId: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 1,
        sprite: "SPRITE_ROCKER",
        movement: "STAY",
        textId: "TEXT_VERMILIONGYM_LT_SURGE",
        trainerId: "OPP_LT_SURGE",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 9,
        y: 6,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_VERMILIONGYM_GENTLEMAN",
        trainerId: "OPP_GENTLEMAN",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 3,
        y: 8,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_VERMILIONGYM_SUPER_NERD",
        trainerId: "OPP_ROCKER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 0,
        y: 10,
        sprite: "SPRITE_SAILOR",
        movement: "STAY",
        textId: "TEXT_VERMILIONGYM_SAILOR",
        trainerId: "OPP_SAILOR",
        trainerLevel: 8
      },
      {
        type: "sprite",
        x: 4,
        y: 14,
        sprite: "SPRITE_GYM_GUIDE",
        movement: "STAY",
        textId: "TEXT_VERMILIONGYM_GYM_GUIDE"
      }
    ]
  },
  textPointers: []
};
