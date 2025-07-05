import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_BLOCKS } from "../data/blocks/Route12";
import { OverworldSprite } from "../sprite";

export const Route12: Map = {
  width: 10,
  height: 54,
  borderBlock: 67,
  blocks: ROUTE_12_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.LavenderTown, xOffset: 0 },
    south: { map: MapName.Route13, xOffset: -20 },
    west: { map: MapName.Route11, yOffset: 27 }
  },
  objects: {
    warps: [
      { x: 10, y: 15, toMap: MapName.Route12Gate1F, warpIndex: 0 },
      { x: 11, y: 15, toMap: MapName.Route12Gate1F, warpIndex: 1 },
      { x: 10, y: 21, toMap: MapName.Route12Gate1F, warpIndex: 2 },
      { x: 11, y: 77, toMap: MapName.Route12SuperRodHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 13, y: 13, signId: "TEXT_ROUTE12_SIGN" },
      { x: 11, y: 63, signId: "TEXT_ROUTE12_SPORT_FISHING_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 62,
        sprite: OverworldSprite.SPRITE_SNORLAX,
        movement: "STAY",
        textId: "TEXT_ROUTE12_SNORLAX"
      },
      {
        type: "trainer",
        x: 14,
        y: 31,
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER1",
        trainerId: "OPP_FISHER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 5,
        y: 39,
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER2",
        trainerId: "OPP_FISHER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 11,
        y: 92,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE12_COOLTRAINER_M",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 14,
        y: 76,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_ROUTE12_SUPER_NERD",
        trainerId: "OPP_ROCKER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 12,
        y: 40,
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER3",
        trainerId: "OPP_FISHER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 9,
        y: 52,
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER4",
        trainerId: "OPP_FISHER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 6,
        y: 87,
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER5",
        trainerId: "OPP_FISHER",
        trainerLevel: 11
      },
      {
        type: "item",
        x: 14,
        y: 35,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE12_TM_PAY_DAY",
        itemId: "TM_PAY_DAY"
      },
      {
        type: "item",
        x: 5,
        y: 89,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE12_IRON",
        itemId: "IRON"
      }
    ]
  },
  textPointers: []
};
