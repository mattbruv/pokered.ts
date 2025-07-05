import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_BLOCKS } from "../data/blocks/Route16";
import { OverworldSprite } from "../sprite";

export const Route16: Map = {
  width: 20,
  height: 9,
  borderBlock: 15,
  blocks: ROUTE_16_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.Route17, xOffset: 0 },
    east: { map: MapName.CeladonCity, yOffset: -4 }
  },
  objects: {
    warps: [
      { x: 17, y: 10, toMap: MapName.Route16Gate1F, warpIndex: 0 },
      { x: 17, y: 11, toMap: MapName.Route16Gate1F, warpIndex: 1 },
      { x: 24, y: 10, toMap: MapName.Route16Gate1F, warpIndex: 2 },
      { x: 24, y: 11, toMap: MapName.Route16Gate1F, warpIndex: 3 },
      { x: 17, y: 4, toMap: MapName.Route16Gate1F, warpIndex: 4 },
      { x: 17, y: 5, toMap: MapName.Route16Gate1F, warpIndex: 5 },
      { x: 24, y: 4, toMap: MapName.Route16Gate1F, warpIndex: 6 },
      { x: 24, y: 5, toMap: MapName.Route16Gate1F, warpIndex: 7 },
      { x: 7, y: 5, toMap: MapName.Route16FlyHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 27, y: 11, signId: "TEXT_ROUTE16_CYCLING_ROAD_SIGN" },
      { x: 5, y: 17, signId: "TEXT_ROUTE16_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 17,
        y: 12,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER1",
        trainerId: "OPP_BIKER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 14,
        y: 13,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER2",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 11,
        y: 12,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER3",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 9,
        y: 11,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER4",
        trainerId: "OPP_BIKER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 6,
        y: 10,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER5",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 3,
        y: 12,
        sprite: OverworldSprite.SPRITE_BIKER,
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER6",
        trainerId: "OPP_BIKER",
        trainerLevel: 7
      },
      {
        type: "sprite",
        x: 26,
        y: 10,
        sprite: OverworldSprite.SPRITE_SNORLAX,
        movement: "STAY",
        textId: "TEXT_ROUTE16_SNORLAX"
      }
    ]
  },
  textPointers: []
};
