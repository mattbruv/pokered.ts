import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_20_BLOCKS } from "../data/blocks/Route20";

export const Route20: Map = {
  width: 50,
  height: 9,
  borderBlock: 67,
  blocks: ROUTE_20_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.CinnabarIsland, xOffset: 0 },
    east: { map: MapName.Route19, xOffset: -18 }
  },
  objects: {
    warps: [
      { x: 48, y: 5, toMap: MapName.SeafoamIslands1F, warpIndex: 0 },
      { x: 58, y: 9, toMap: MapName.SeafoamIslands1F, warpIndex: 2 }
    ],
    backgroundItems: [
      { x: 51, y: 7, signId: "TEXT_ROUTE20_SEAFOAM_ISLANDS_WEST_SIGN" },
      { x: 57, y: 11, signId: "TEXT_ROUTE20_SEAFOAM_ISLANDS_EAST_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 87,
        y: 8,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER1",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 68,
        y: 11,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER2",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 45,
        y: 10,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER3",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 55,
        y: 14,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER4",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 24
      },
      {
        type: "trainer",
        x: 38,
        y: 13,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER5",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 87,
        y: 13,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER6",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 34,
        y: 9,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_ROUTE20_COOLTRAINER_M",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 25,
        y: 7,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER7",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 24,
        y: 12,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER8",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 16
      },
      {
        type: "trainer",
        x: 15,
        y: 8,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER9",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 8
      }
    ]
  },
  textPointers: []
};
