import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_GYM_BLOCKS } from "../data/blocks/CeruleanGym";
import { OverworldSprite } from "../sprite";

export const CeruleanGym: Map = {
  width: 5,
  height: 7,
  borderBlock: 3,
  blocks: CERULEAN_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 13, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 5, y: 13, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 2,
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CERULEANGYM_MISTY",
        trainerId: "OPP_MISTY",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 2,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_CERULEANGYM_COOLTRAINER_F",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 8,
        y: 7,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_CERULEANGYM_SWIMMER",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 1
      },
      {
        type: "sprite",
        x: 7,
        y: 10,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_CERULEANGYM_GYM_GUIDE"
      }
    ]
  },
  textPointers: []
};
