import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_17_BLOCKS } from "../data/blocks/Route17";
import { OverworldSprite } from "../sprite";

export const Route17: Map = {
  width: 10,
  height: 72,
  borderBlock: 67,
  blocks: ROUTE_17_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route16, xOffset: 0 },
    south: { map: MapName.Route18, xOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [
      { x: 9, y: 51, signId: "TEXT_ROUTE17_NOTICE_SIGN1" },
      { x: 9, y: 63, signId: "TEXT_ROUTE17_TRAINER_TIPS1" },
      { x: 9, y: 75, signId: "TEXT_ROUTE17_TRAINER_TIPS2" },
      { x: 9, y: 87, signId: "TEXT_ROUTE17_SIGN" },
      { x: 9, y: 111, signId: "TEXT_ROUTE17_NOTICE_SIGN2" },
      { x: 9, y: 141, signId: "TEXT_ROUTE17_CYCLING_ROAD_ENDS_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 19,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER1",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 11,
        y: 16,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER2",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 4,
        y: 18,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER3",
        trainerId: "OPP_BIKER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 7,
        y: 32,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER4",
        trainerId: "OPP_BIKER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 14,
        y: 34,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER5",
        trainerId: "OPP_BIKER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 17,
        y: 58,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER6",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 2,
        y: 68,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER7",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 14,
        y: 98,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER8",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 5,
        y: 98,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER9",
        trainerId: "OPP_BIKER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 10,
        y: 118,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER10",
        trainerId: "OPP_BIKER",
        trainerLevel: 12
      }
    ]
  },
  textPointers: []
};
