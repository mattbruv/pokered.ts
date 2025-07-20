import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_11_BLOCKS } from "../data/blocks/Route11";
import { OverworldSprite } from "../sprite";

export const Route11: Map = {
  width: 30,
  height: 9,
  borderBlock: 15,
  blocks: ROUTE_11_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.VermilionCity, yOffset: -4 },
    east: { map: MapName.Route12, yOffset: -27 }
  },
  objects: {
    warps: [
      { x: 49, y: 8, toMap: MapName.Route11Gate1F, warpIndex: 0 },
      { x: 49, y: 9, toMap: MapName.Route11Gate1F, warpIndex: 1 },
      { x: 58, y: 8, toMap: MapName.Route11Gate1F, warpIndex: 2 },
      { x: 58, y: 9, toMap: MapName.Route11Gate1F, warpIndex: 3 },
      { x: 4, y: 5, toMap: MapName.DiglettsCaveRoute11, warpIndex: 0 }
    ],
    backgroundItems: [{ x: 1, y: 5, signId: "TEXT_ROUTE11_DIGLETTSCAVE_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 10,
        y: 14,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE11_GAMBLER1",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 26,
        y: 9,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE11_GAMBLER2",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 13,
        y: 5,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE11_YOUNGSTER1",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 36,
        y: 11,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE11_SUPER_NERD1",
        trainerId: "OPP_ENGINEER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 22,
        y: 4,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE11_YOUNGSTER2",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 45,
        y: 7,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE11_GAMBLER3",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 33,
        y: 3,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE11_GAMBLER4",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 43,
        y: 5,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE11_YOUNGSTER3",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 45,
        y: 16,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE11_SUPER_NERD2",
        trainerId: "OPP_ENGINEER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 22,
        y: 12,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE11_YOUNGSTER4",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 12
      }
    ]
  },
  textPointers: []
};
