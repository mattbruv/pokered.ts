import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_18_BLOCKS } from "../data/blocks/Route18";
import { OverworldSprite } from "../sprite";

export const Route18: Map = {
  width: 25,
  height: 9,
  borderBlock: 67,
  blocks: ROUTE_18_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route17, xOffset: 0 },
    east: { map: MapName.FuchsiaCity, yOffset: -4 }
  },
  objects: {
    warps: [
      { x: 33, y: 8, toMap: MapName.Route18Gate1F, warpIndex: 0 },
      { x: 33, y: 9, toMap: MapName.Route18Gate1F, warpIndex: 1 },
      { x: 40, y: 8, toMap: MapName.Route18Gate1F, warpIndex: 2 },
      { x: 40, y: 9, toMap: MapName.Route18Gate1F, warpIndex: 3 }
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
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE18_COOLTRAINER_M1",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 40,
        y: 15,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE18_COOLTRAINER_M2",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 42,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_ROUTE18_COOLTRAINER_M3",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 10
      }
    ]
  },
  textPointers: []
};
