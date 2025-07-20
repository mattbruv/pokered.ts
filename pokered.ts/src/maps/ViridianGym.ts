import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_GYM_BLOCKS } from "../data/blocks/ViridianGym";
import { OverworldSprite } from "../sprite";

export const ViridianGym: Map = {
  width: 10,
  height: 9,
  borderBlock: 3,
  blocks: VIRIDIAN_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 16, y: 17, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 17, y: 17, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 2,
        y: 1,
        sprite: OverworldSprite.SPRITE_GIOVANNI,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_GIOVANNI",
        trainerId: "OPP_GIOVANNI",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 12,
        y: 7,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_COOLTRAINER_M1",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 11,
        y: 11,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_HIKER1",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 10,
        y: 7,
        sprite: OverworldSprite.SPRITE_ROCKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_ROCKER1",
        trainerId: "OPP_TAMER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 3,
        y: 7,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_HIKER2",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 13,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_COOLTRAINER_M2",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 10,
        y: 1,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_HIKER3",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 2,
        y: 16,
        sprite: OverworldSprite.SPRITE_ROCKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_ROCKER2",
        trainerId: "OPP_TAMER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 6,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_COOLTRAINER_M3",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 1
      },
      {
        type: "sprite",
        x: 16,
        y: 15,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_GYM_GUIDE"
      },
      {
        type: "item",
        x: 16,
        y: 9,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_REVIVE",
        itemId: "REVIVE"
      }
    ]
  },
  textPointers: []
};
