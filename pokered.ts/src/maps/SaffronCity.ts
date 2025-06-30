import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_CITY_BLOCKS } from "../data/blocks/SaffronCity";

export const SaffronCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 15,
  blocks: SAFFRON_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route5, yOffset: 5 },
    south: { map: MapName.Route6, yOffset: 5 },
    west: { map: MapName.Route7, xOffset: 4 },
    east: { map: MapName.Route8, xOffset: 4 }
  },
  objects: {
    warps: [
      { x: 7, y: 5, toMap: MapName.CopycatsHouse1F, warpIndex: 0 },
      { x: 26, y: 3, toMap: MapName.FightingDojo, warpIndex: 0 },
      { x: 34, y: 3, toMap: MapName.SaffronGym, warpIndex: 0 },
      { x: 13, y: 11, toMap: MapName.SaffronPidgeyHouse, warpIndex: 0 },
      { x: 25, y: 11, toMap: MapName.SaffronMart, warpIndex: 0 },
      { x: 18, y: 21, toMap: MapName.SilphCo1F, warpIndex: 0 },
      { x: 9, y: 29, toMap: MapName.SaffronPokecenter, warpIndex: 0 },
      { x: 29, y: 29, toMap: MapName.MrPsychicsHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 17, y: 5, signId: "TEXT_SAFFRONCITY_SIGN" },
      { x: 27, y: 5, signId: "TEXT_SAFFRONCITY_FIGHTING_DOJO_SIGN" },
      { x: 35, y: 5, signId: "TEXT_SAFFRONCITY_GYM_SIGN" },
      { x: 26, y: 11, signId: "TEXT_SAFFRONCITY_MART_SIGN" },
      { x: 39, y: 19, signId: "TEXT_SAFFRONCITY_TRAINER_TIPS1" },
      { x: 5, y: 21, signId: "TEXT_SAFFRONCITY_TRAINER_TIPS2" },
      { x: 15, y: 21, signId: "TEXT_SAFFRONCITY_SILPH_CO_SIGN" },
      { x: 10, y: 29, signId: "TEXT_SAFFRONCITY_POKECENTER_SIGN" },
      { x: 27, y: 29, signId: "TEXT_SAFFRONCITY_MR_PSYCHICS_HOUSE_SIGN" },
      { x: 1, y: 19, signId: "TEXT_SAFFRONCITY_SILPH_CO_LATEST_PRODUCT_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 7,
        y: 6,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET1"
      },
      {
        type: "sprite",
        x: 20,
        y: 8,
        sprite: "SPRITE_ROCKET",
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_ROCKET2"
      },
      {
        type: "sprite",
        x: 34,
        y: 4,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET3"
      },
      {
        type: "sprite",
        x: 13,
        y: 12,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET4"
      },
      {
        type: "sprite",
        x: 11,
        y: 25,
        sprite: "SPRITE_ROCKET",
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_ROCKET5"
      },
      {
        type: "sprite",
        x: 32,
        y: 13,
        sprite: "SPRITE_ROCKET",
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_ROCKET6"
      },
      {
        type: "sprite",
        x: 18,
        y: 30,
        sprite: "SPRITE_ROCKET",
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_ROCKET7"
      },
      {
        type: "sprite",
        x: 8,
        y: 14,
        sprite: "SPRITE_SCIENTIST",
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_SCIENTIST"
      },
      {
        type: "sprite",
        x: 23,
        y: 23,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_SILPH_WORKER_M"
      },
      {
        type: "sprite",
        x: 17,
        y: 30,
        sprite: "SPRITE_SILPH_WORKER_F",
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_SILPH_WORKER_F"
      },
      {
        type: "sprite",
        x: 30,
        y: 12,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 31,
        y: 12,
        sprite: "SPRITE_BIRD",
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_PIDGEOT"
      },
      {
        type: "sprite",
        x: 18,
        y: 8,
        sprite: "SPRITE_ROCKER",
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKER"
      },
      {
        type: "sprite",
        x: 18,
        y: 22,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET8"
      },
      {
        type: "sprite",
        x: 19,
        y: 22,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET9"
      }
    ]
  },
  textPointers: []
};
