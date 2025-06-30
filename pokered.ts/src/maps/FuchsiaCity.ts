import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_CITY_BLOCKS } from "../data/blocks/FuchsiaCity";

export const FuchsiaCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 15,
  blocks: FUCHSIA_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.Route19, yOffset: 5 },
    west: { map: MapName.Route18, xOffset: 4 },
    east: { map: MapName.Route15, xOffset: 4 }
  },
  objects: {
    warps: [
      { x: 5, y: 13, toMap: MapName.FuchsiaMart, warpIndex: 0 },
      { x: 11, y: 27, toMap: MapName.FuchsiaBillsGrandpasHouse, warpIndex: 0 },
      { x: 19, y: 27, toMap: MapName.FuchsiaPokecenter, warpIndex: 0 },
      { x: 27, y: 27, toMap: MapName.WardensHouse, warpIndex: 0 },
      { x: 18, y: 3, toMap: MapName.SafariZoneGate, warpIndex: 0 },
      { x: 5, y: 27, toMap: MapName.FuchsiaGym, warpIndex: 0 },
      { x: 22, y: 13, toMap: MapName.FuchsiaMeetingRoom, warpIndex: 0 },
      { x: 31, y: 27, toMap: MapName.FuchsiaGoodRodHouse, warpIndex: 1 },
      { x: 31, y: 24, toMap: MapName.FuchsiaGoodRodHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 15, y: 23, signId: "TEXT_FUCHSIACITY_SIGN1" },
      { x: 25, y: 15, signId: "TEXT_FUCHSIACITY_SIGN2" },
      { x: 17, y: 5, signId: "TEXT_FUCHSIACITY_SAFARI_GAME_SIGN" },
      { x: 6, y: 13, signId: "TEXT_FUCHSIACITY_MART_SIGN" },
      { x: 20, y: 27, signId: "TEXT_FUCHSIACITY_POKECENTER_SIGN" },
      { x: 27, y: 29, signId: "TEXT_FUCHSIACITY_WARDENS_HOME_SIGN" },
      { x: 21, y: 15, signId: "TEXT_FUCHSIACITY_SAFARI_ZONE_SIGN" },
      { x: 5, y: 29, signId: "TEXT_FUCHSIACITY_GYM_SIGN" },
      { x: 33, y: 7, signId: "TEXT_FUCHSIACITY_CHANSEY_SIGN" },
      { x: 27, y: 7, signId: "TEXT_FUCHSIACITY_VOLTORB_SIGN" },
      { x: 13, y: 7, signId: "TEXT_FUCHSIACITY_KANGASKHAN_SIGN" },
      { x: 31, y: 13, signId: "TEXT_FUCHSIACITY_SLOWPOKE_SIGN" },
      { x: 13, y: 15, signId: "TEXT_FUCHSIACITY_LAPRAS_SIGN" },
      { x: 7, y: 7, signId: "TEXT_FUCHSIACITY_FOSSIL_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 12,
        sprite: "SPRITE_YOUNGSTER",
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_YOUNGSTER1"
      },
      {
        type: "sprite",
        x: 28,
        y: 17,
        sprite: "SPRITE_GAMBLER",
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_GAMBLER"
      },
      {
        type: "sprite",
        x: 30,
        y: 14,
        sprite: "SPRITE_FISHER",
        movement: "STAY",
        textId: "TEXT_FUCHSIACITY_ERIK"
      },
      {
        type: "sprite",
        x: 24,
        y: 8,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_FUCHSIACITY_YOUNGSTER2"
      },
      {
        type: "sprite",
        x: 31,
        y: 5,
        sprite: "SPRITE_FAIRY",
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_CHANSEY"
      },
      {
        type: "sprite",
        x: 25,
        y: 6,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_FUCHSIACITY_VOLTORB"
      },
      {
        type: "sprite",
        x: 12,
        y: 6,
        sprite: "SPRITE_MONSTER",
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_KANGASKHAN"
      },
      {
        type: "sprite",
        x: 30,
        y: 12,
        sprite: "SPRITE_MONSTER",
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_SLOWPOKE"
      },
      {
        type: "sprite",
        x: 8,
        y: 17,
        sprite: "SPRITE_SEEL",
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_LAPRAS"
      },
      {
        type: "sprite",
        x: 6,
        y: 5,
        sprite: "SPRITE_FOSSIL",
        movement: "STAY",
        textId: "TEXT_FUCHSIACITY_FOSSIL"
      }
    ]
  },
  textPointers: []
};
