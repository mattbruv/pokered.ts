import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_25_BLOCKS } from "../data/blocks/Route25";

export const Route25: Map = {
  width: 30,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_25_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.Route24, xOffset: 0 }
  },
  objects: {
    warps: [{ x: 45, y: 3, toMap: MapName.BillsHouse, warpId: 1 }],
    backgroundItems: [{ x: 43, y: 3, signId: "TEXT_ROUTE25_BILL_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 14,
        y: 2,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_ROUTE25_YOUNGSTER1",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 18,
        y: 5,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_ROUTE25_YOUNGSTER2",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 24,
        y: 4,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_ROUTE25_COOLTRAINER_M",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 18,
        y: 8,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_ROUTE25_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 32,
        y: 3,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_ROUTE25_YOUNGSTER3",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 37,
        y: 4,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_ROUTE25_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 8,
        y: 4,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_ROUTE25_HIKER1",
        trainerId: "OPP_HIKER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 23,
        y: 9,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_ROUTE25_HIKER2",
        trainerId: "OPP_HIKER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 13,
        y: 7,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_ROUTE25_HIKER3",
        trainerId: "OPP_HIKER",
        trainerLevel: 4
      },
      {
        type: "item",
        x: 22,
        y: 2,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_ROUTE25_TM_SEISMIC_TOSS",
        itemId: "TM_SEISMIC_TOSS"
      }
    ]
  },
  textPointers: []
};
