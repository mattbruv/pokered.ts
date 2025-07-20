import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_3_BLOCKS } from "../data/blocks/Route3";
import { OverworldSprite } from "../sprite";

export const Route3: Map = {
  width: 35,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_3_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route4, xOffset: 25 },
    west: { map: MapName.PewterCity, yOffset: -4 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 59, y: 9, signId: "TEXT_ROUTE3_SIGN" }],
    objects: [
      {
        type: "sprite",
        x: 57,
        y: 11,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_ROUTE3_SUPER_NERD"
      },
      {
        type: "trainer",
        x: 10,
        y: 6,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER1",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 14,
        y: 4,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER2",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 16,
        y: 9,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 19,
        y: 5,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER3",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 23,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 22,
        y: 9,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER4",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 24,
        y: 6,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER5",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 33,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE3_COOLTRAINER_F3",
        trainerId: "OPP_LASS",
        trainerLevel: 3
      }
    ]
  },
  textPointers: []
};
