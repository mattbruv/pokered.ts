import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_8_BLOCKS } from "../data/blocks/Route8";
import { OverworldSprite } from "../sprite";

export const Route8: Map = {
  width: 30,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_8_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.SaffronCity, xOffset: -4 },
    east: { map: MapName.LavenderTown, xOffset: 0 }
  },
  objects: {
    warps: [
      { x: 1, y: 9, toMap: MapName.Route8Gate, warpIndex: 0 },
      { x: 1, y: 10, toMap: MapName.Route8Gate, warpIndex: 1 },
      { x: 8, y: 9, toMap: MapName.Route8Gate, warpIndex: 2 },
      { x: 8, y: 10, toMap: MapName.Route8Gate, warpIndex: 3 },
      { x: 13, y: 3, toMap: MapName.UndergroundPathRoute8, warpIndex: 0 }
    ],
    backgroundItems: [{ x: 17, y: 3, signId: "TEXT_ROUTE8_UNDERGROUND_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 8,
        y: 5,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_ROUTE8_SUPER_NERD1",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 13,
        y: 9,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_ROUTE8_GAMBLER1",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 42,
        y: 6,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_ROUTE8_SUPER_NERD2",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 26,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_ROUTE8_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 26,
        y: 4,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_ROUTE8_SUPER_NERD3",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 26,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_ROUTE8_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 26,
        y: 6,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_ROUTE8_COOLTRAINER_F3",
        trainerId: "OPP_LASS",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 46,
        y: 13,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_ROUTE8_GAMBLER2",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 51,
        y: 12,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_ROUTE8_COOLTRAINER_F4",
        trainerId: "OPP_LASS",
        trainerLevel: 16
      }
    ]
  },
  textPointers: []
};
