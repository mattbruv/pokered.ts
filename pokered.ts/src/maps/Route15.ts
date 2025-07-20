import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_15_BLOCKS } from "../data/blocks/Route15";
import { OverworldSprite } from "../sprite";

export const Route15: Map = {
  width: 30,
  height: 9,
  borderBlock: 67,
  blocks: ROUTE_15_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.FuchsiaCity, yOffset: -4 },
    east: { map: MapName.Route14, yOffset: -18 }
  },
  objects: {
    warps: [
      { x: 7, y: 8, toMap: MapName.Route15Gate1F, warpIndex: 0 },
      { x: 7, y: 9, toMap: MapName.Route15Gate1F, warpIndex: 1 },
      { x: 14, y: 8, toMap: MapName.Route15Gate1F, warpIndex: 2 },
      { x: 14, y: 9, toMap: MapName.Route15Gate1F, warpIndex: 3 }
    ],
    backgroundItems: [{ x: 39, y: 9, signId: "TEXT_ROUTE15_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 41,
        y: 11,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 20
      },
      {
        type: "trainer",
        x: 53,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 21
      },
      {
        type: "trainer",
        x: 31,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_M1",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 35,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_M2",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 53,
        y: 11,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE15_BEAUTY1",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 41,
        y: 10,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE15_BEAUTY2",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 48,
        y: 10,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE15_BIKER1",
        trainerId: "OPP_BIKER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 46,
        y: 10,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE15_BIKER2",
        trainerId: "OPP_BIKER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 37,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_F3",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 22
      },
      {
        type: "trainer",
        x: 18,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_F4",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 23
      },
      {
        type: "item",
        x: 18,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE15_TM_RAGE",
        itemId: "TM_RAGE"
      }
    ]
  },
  textPointers: []
};
