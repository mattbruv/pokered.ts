import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_19_BLOCKS } from "../data/blocks/Route19";

export const Route19: Map = {
  width: 10,
  height: 27,
  borderBlock: 67,
  blocks: ROUTE_19_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.FuchsiaCity, yOffset: -5 },
    west: { map: MapName.Route20, xOffset: 18 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 11, y: 9, signId: "TEXT_ROUTE19_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 8,
        y: 7,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_ROUTE19_COOLTRAINER_M1",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 13,
        y: 7,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_ROUTE19_COOLTRAINER_M2",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 13,
        y: 25,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER1",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 4,
        y: 27,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER2",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 16,
        y: 31,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER3",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 9,
        y: 11,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER4",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 8,
        y: 43,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER5",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 12
      },
      {
        type: "trainer",
        x: 11,
        y: 43,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER6",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 9,
        y: 42,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER7",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 10,
        y: 44,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER8",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 14
      }
    ]
  },
  textPointers: []
};
