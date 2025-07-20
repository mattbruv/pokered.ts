import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_13_BLOCKS } from "../data/blocks/Route13";
import { OverworldSprite } from "../sprite";

export const Route13: Map = {
  width: 30,
  height: 9,
  borderBlock: 67,
  blocks: ROUTE_13_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route12, xOffset: 20 },
    west: { map: MapName.Route14, yOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [
      { x: 15, y: 13, signId: "TEXT_ROUTE13_TRAINER_TIPS1" },
      { x: 33, y: 5, signId: "TEXT_ROUTE13_TRAINER_TIPS2" },
      { x: 31, y: 11, signId: "TEXT_ROUTE13_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 49,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_M1",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 48,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 12
      },
      {
        type: "trainer",
        x: 27,
        y: 9,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 23,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_F3",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 50,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_F4",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 12,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_M2",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 33,
        y: 6,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_BEAUTY1",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 32,
        y: 6,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_BEAUTY2",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 10,
        y: 7,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE13_BIKER",
        trainerId: "OPP_BIKER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 7,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_M3",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 3
      }
    ]
  },
  textPointers: []
};
