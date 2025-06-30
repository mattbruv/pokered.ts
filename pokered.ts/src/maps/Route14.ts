import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_14_BLOCKS } from "../data/blocks/Route14";
import { OverworldSprite } from "../sprite";

export const Route14: Map = {
  width: 10,
  height: 27,
  borderBlock: 67,
  blocks: ROUTE_14_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.Route15, xOffset: 18 },
    east: { map: MapName.Route13, xOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 17, y: 13, signId: "TEXT_ROUTE14_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M1",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 15,
        y: 6,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M2",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 12,
        y: 11,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M3",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 16
      },
      {
        type: "trainer",
        x: 14,
        y: 15,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M4",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 17
      },
      {
        type: "trainer",
        x: 15,
        y: 31,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M5",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 6,
        y: 49,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M6",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 5,
        y: 39,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE14_BIKER1",
        trainerId: "OPP_BIKER",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 4,
        y: 30,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE14_BIKER2",
        trainerId: "OPP_BIKER",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 15,
        y: 30,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE14_BIKER3",
        trainerId: "OPP_BIKER",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 4,
        y: 31,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE14_BIKER4",
        trainerId: "OPP_BIKER",
        trainerLevel: 2
      }
    ]
  },
  textPointers: []
};
