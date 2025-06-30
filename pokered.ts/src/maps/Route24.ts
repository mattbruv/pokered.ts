import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_24_BLOCKS } from "../data/blocks/Route24";
import { OverworldSprite } from "../sprite";

export const Route24: Map = {
  width: 10,
  height: 18,
  borderBlock: 44,
  blocks: ROUTE_24_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.CeruleanCity, yOffset: -5 },
    east: { map: MapName.Route25, xOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 11,
        y: 15,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_M1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 5,
        y: 20,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_M2",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 11,
        y: 19,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_M3",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 10,
        y: 22,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 11,
        y: 25,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_ROUTE24_YOUNGSTER1",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 10,
        y: 28,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 11,
        y: 31,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_ROUTE24_YOUNGSTER2",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 9
      },
      {
        type: "item",
        x: 10,
        y: 5,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE24_TM_THUNDER_WAVE",
        itemId: "TM_THUNDER_WAVE"
      }
    ]
  },
  textPointers: []
};
