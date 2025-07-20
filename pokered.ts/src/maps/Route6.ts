import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_6_BLOCKS } from "../data/blocks/Route6";
import { OverworldSprite } from "../sprite";

export const Route6: Map = {
  width: 10,
  height: 18,
  borderBlock: 15,
  blocks: ROUTE_6_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.SaffronCity, xOffset: -5 },
    south: { map: MapName.VermilionCity, xOffset: -5 }
  },
  objects: {
    warps: [
      { x: 9, y: 1, toMap: MapName.Route6Gate, warpIndex: 2 },
      { x: 10, y: 1, toMap: MapName.Route6Gate, warpIndex: 2 },
      { x: 10, y: 7, toMap: MapName.Route6Gate, warpIndex: 0 },
      { x: 17, y: 13, toMap: MapName.UndergroundPathRoute6, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 19, y: 15, signId: "TEXT_ROUTE6_UNDERGROUND_PATH_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 10,
        y: 21,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_COOLTRAINER_M1",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 11,
        y: 21,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 0,
        y: 15,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_YOUNGSTER1",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 11,
        y: 31,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_COOLTRAINER_M2",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 11,
        y: 30,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 19,
        y: 26,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_YOUNGSTER2",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 11
      }
    ]
  },
  textPointers: []
};
