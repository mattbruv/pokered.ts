import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_GYM_BLOCKS } from "../data/blocks/CeladonGym";
import { OverworldSprite } from "../sprite";

export const CeladonGym: Map = {
  width: 5,
  height: 9,
  borderBlock: 3,
  blocks: CELADON_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 17, toMap: "LAST_MAP", warpIndex: 6 },
      { x: 5, y: 17, toMap: "LAST_MAP", warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 3,
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "STAY",
        textId: "TEXT_CELADONGYM_ERIKA",
        trainerId: "OPP_ERIKA",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 2,
        y: 11,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_CELADONGYM_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 17
      },
      {
        type: "trainer",
        x: 7,
        y: 10,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "STAY",
        textId: "TEXT_CELADONGYM_BEAUTY1",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 9,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_CELADONGYM_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 1,
        y: 5,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "STAY",
        textId: "TEXT_CELADONGYM_BEAUTY2",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 6,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_CELADONGYM_COOLTRAINER_F3",
        trainerId: "OPP_LASS",
        trainerLevel: 18
      },
      {
        type: "trainer",
        x: 3,
        y: 3,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "STAY",
        textId: "TEXT_CELADONGYM_BEAUTY3",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 5,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_CELADONGYM_COOLTRAINER_F4",
        trainerId: "OPP_COOLTRAINER_F",
        trainerLevel: 1
      }
    ]
  },
  textPointers: []
};
