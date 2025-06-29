import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_BLOCKS } from "../data/blocks/Route12";

export const Route12: Map = {
  width: 10,
  height: 54,
  borderBlock: 67,
  blocks: ROUTE_12_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.LavenderTown, yOffset: 0 },
    south: { map: MapName.Route13, yOffset: -20 },
    west: { map: MapName.Route11, xOffset: 27 }
  },
  objects: {
    warps: [
      { x: 10, y: 15, toMap: "ROUTE_12_GATE_1F", warpId: 1 },
      { x: 11, y: 15, toMap: "ROUTE_12_GATE_1F", warpId: 2 },
      { x: 10, y: 21, toMap: "ROUTE_12_GATE_1F", warpId: 3 },
      { x: 11, y: 77, toMap: "ROUTE_12_SUPER_ROD_HOUSE", warpId: 1 }
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
        sprite: "SPRITE_SNORLAX",
        movement: "STAY",
        textId: "TEXT_ROUTE12_SNORLAX"
      },
      {
        type: "trainer",
        x: 14,
        y: 31,
        sprite: "SPRITE_FISHER",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER1",
        trainerId: "OPP_FISHER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 5,
        y: 39,
        sprite: "SPRITE_FISHER",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER2",
        trainerId: "OPP_FISHER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 11,
        y: 92,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_ROUTE12_COOLTRAINER_M",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 14,
        y: 76,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_ROUTE12_SUPER_NERD",
        trainerId: "OPP_ROCKER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 12,
        y: 40,
        sprite: "SPRITE_FISHER",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER3",
        trainerId: "OPP_FISHER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 9,
        y: 52,
        sprite: "SPRITE_FISHER",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER4",
        trainerId: "OPP_FISHER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 6,
        y: 87,
        sprite: "SPRITE_FISHER",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER5",
        trainerId: "OPP_FISHER",
        trainerLevel: 11
      },
      {
        type: "item",
        x: 14,
        y: 35,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_ROUTE12_TM_PAY_DAY",
        itemId: "TM_PAY_DAY"
      },
      {
        type: "item",
        x: 5,
        y: 89,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_ROUTE12_IRON",
        itemId: "IRON"
      }
    ]
  },
  textPointers: []
};
