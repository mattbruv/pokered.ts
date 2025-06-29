import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_18_BLOCKS } from "../data/blocks/Route18";

export const Route18: Map = {
  width: 25,
  height: 9,
  borderBlock: 67,
  blocks: ROUTE_18_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route17, yOffset: 0 },
    east: { map: MapName.FuchsiaCity, xOffset: -4 }
  },
  objects: {
    warps: [
      { x: 33, y: 8, toMap: "ROUTE_18_GATE_1F", warpId: 1 },
      { x: 33, y: 9, toMap: "ROUTE_18_GATE_1F", warpId: 2 },
      { x: 40, y: 8, toMap: "ROUTE_18_GATE_1F", warpId: 3 },
      { x: 40, y: 9, toMap: "ROUTE_18_GATE_1F", warpId: 4 }
    ],
    backgroundItems: [
      { x: 43, y: 7, signId: "TEXT_ROUTE18_SIGN" },
      { x: 33, y: 5, signId: "TEXT_ROUTE18_CYCLING_ROAD_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 36,
        y: 11,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_ROUTE18_COOLTRAINER_M1",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 40,
        y: 15,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_ROUTE18_COOLTRAINER_M2",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 42,
        y: 13,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_ROUTE18_COOLTRAINER_M3",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 10
      }
    ]
  },
  textPointers: []
};
