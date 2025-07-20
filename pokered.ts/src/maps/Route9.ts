import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_9_BLOCKS } from "../data/blocks/Route9";
import { OverworldSprite } from "../sprite";

export const Route9: Map = {
  width: 30,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_9_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.CeruleanCity, yOffset: -4 },
    east: { map: MapName.Route10, yOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 25, y: 7, signId: "TEXT_ROUTE9_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 13,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 24,
        y: 7,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_COOLTRAINER_M1",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 31,
        y: 7,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_COOLTRAINER_M2",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 48,
        y: 8,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 16,
        y: 15,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_HIKER1",
        trainerId: "OPP_HIKER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 43,
        y: 3,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_HIKER2",
        trainerId: "OPP_HIKER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 22,
        y: 2,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE9_YOUNGSTER1",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 45,
        y: 15,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_HIKER3",
        trainerId: "OPP_HIKER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 40,
        y: 8,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_YOUNGSTER2",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 14
      },
      {
        type: "item",
        x: 10,
        y: 15,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE9_TM_TELEPORT",
        itemId: "TM_TELEPORT"
      }
    ]
  },
  textPointers: []
};
