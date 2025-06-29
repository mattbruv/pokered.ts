import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_GYM_BLOCKS } from "../data/blocks/PewterGym";

export const PewterGym: Map = {
  width: 5,
  height: 7,
  borderBlock: 3,
  blocks: PEWTER_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 13, toMap: "LAST_MAP", warpId: 3 },
      { x: 5, y: 13, toMap: "LAST_MAP", warpId: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 1,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_PEWTERGYM_BROCK",
        trainerId: "OPP_BROCK",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 3,
        y: 6,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_PEWTERGYM_COOLTRAINER_M",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 1
      },
      {
        type: "sprite",
        x: 7,
        y: 10,
        sprite: "SPRITE_GYM_GUIDE",
        movement: "STAY",
        textId: "TEXT_PEWTERGYM_GYM_GUIDE"
      }
    ]
  },
  textPointers: []
};
