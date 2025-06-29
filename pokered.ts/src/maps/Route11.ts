import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_11_BLOCKS } from "../data/blocks/Route11";

export const Route11: Map = {
  width: 30,
  height: 9,
  borderBlock: 15,
  blocks: ROUTE_11_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.VermilionCity, xOffset: -4 },
    east: { map: MapName.Route12, xOffset: -27 }
  },
  objects: {
    warps: [
      { x: 49, y: 8, toMap: "ROUTE_11_GATE_1F", warpId: 1 },
      { x: 49, y: 9, toMap: "ROUTE_11_GATE_1F", warpId: 2 },
      { x: 58, y: 8, toMap: "ROUTE_11_GATE_1F", warpId: 3 },
      { x: 58, y: 9, toMap: "ROUTE_11_GATE_1F", warpId: 4 },
      { x: 4, y: 5, toMap: "DIGLETTS_CAVE_ROUTE_11", warpId: 1 }
    ],
    backgroundItems: [{ x: 1, y: 5, signId: "TEXT_ROUTE11_DIGLETTSCAVE_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 10,
        y: 14,
        sprite: "SPRITE_GAMBLER",
        movement: "STAY",
        textId: "TEXT_ROUTE11_GAMBLER1",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 26,
        y: 9,
        sprite: "SPRITE_GAMBLER",
        movement: "STAY",
        textId: "TEXT_ROUTE11_GAMBLER2",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 13,
        y: 5,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_ROUTE11_YOUNGSTER1",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 36,
        y: 11,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_ROUTE11_SUPER_NERD1",
        trainerId: "OPP_ENGINEER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 22,
        y: 4,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_ROUTE11_YOUNGSTER2",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 45,
        y: 7,
        sprite: "SPRITE_GAMBLER",
        movement: "STAY",
        textId: "TEXT_ROUTE11_GAMBLER3",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 33,
        y: 3,
        sprite: "SPRITE_GAMBLER",
        movement: "STAY",
        textId: "TEXT_ROUTE11_GAMBLER4",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 43,
        y: 5,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_ROUTE11_YOUNGSTER3",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 45,
        y: 16,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_ROUTE11_SUPER_NERD2",
        trainerId: "OPP_ENGINEER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 22,
        y: 12,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_ROUTE11_YOUNGSTER4",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 12
      }
    ]
  },
  textPointers: []
};
