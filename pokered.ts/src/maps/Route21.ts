import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_21_BLOCKS } from "../data/blocks/Route21";
import { OverworldSprite } from "../sprite";

export const Route21: Map = {
  width: 10,
  height: 45,
  borderBlock: 67,
  blocks: ROUTE_21_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.PalletTown, xOffset: 0 },
    south: { map: MapName.CinnabarIsland, xOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 24,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_FISHER1",
        trainerId: "OPP_FISHER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 6,
        y: 25,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE21_FISHER2",
        trainerId: "OPP_FISHER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 10,
        y: 31,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER1",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 12
      },
      {
        type: "trainer",
        x: 12,
        y: 30,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER2",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 16,
        y: 63,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER3",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 5,
        y: 71,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER4",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 15,
        y: 71,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER5",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 14,
        y: 56,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_FISHER3",
        trainerId: "OPP_FISHER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 17,
        y: 57,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_FISHER4",
        trainerId: "OPP_FISHER",
        trainerLevel: 10
      }
    ]
  },
  textPointers: []
};
