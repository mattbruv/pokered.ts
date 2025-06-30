import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CITY_BLOCKS } from "../data/blocks/CeruleanCity";

export const CeruleanCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 15,
  blocks: CERULEAN_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route24, yOffset: 5 },
    south: { map: MapName.Route5, yOffset: 5 },
    west: { map: MapName.Route4, xOffset: 4 },
    east: { map: MapName.Route9, xOffset: 4 }
  },
  objects: {
    warps: [
      { x: 27, y: 11, toMap: MapName.CeruleanTrashedHouse, warpId: 1 },
      { x: 13, y: 15, toMap: MapName.CeruleanTradeHouse, warpId: 1 },
      { x: 19, y: 17, toMap: MapName.CeruleanPokecenter, warpId: 1 },
      { x: 30, y: 19, toMap: MapName.CeruleanGym, warpId: 1 },
      { x: 13, y: 25, toMap: MapName.BikeShop, warpId: 1 },
      { x: 25, y: 25, toMap: MapName.CeruleanMart, warpId: 1 },
      { x: 4, y: 11, toMap: MapName.CeruleanCave1F, warpId: 1 },
      { x: 27, y: 9, toMap: MapName.CeruleanTrashedHouse, warpId: 3 },
      { x: 9, y: 11, toMap: MapName.CeruleanBadgeHouse, warpId: 2 },
      { x: 9, y: 9, toMap: MapName.CeruleanBadgeHouse, warpId: 1 }
    ],
    backgroundItems: [
      { x: 23, y: 19, signId: "TEXT_CERULEANCITY_SIGN" },
      { x: 17, y: 29, signId: "TEXT_CERULEANCITY_TRAINER_TIPS" },
      { x: 26, y: 25, signId: "TEXT_CERULEANCITY_MART_SIGN" },
      { x: 20, y: 17, signId: "TEXT_CERULEANCITY_POKECENTER_SIGN" },
      { x: 11, y: 25, signId: "TEXT_CERULEANCITY_BIKESHOP_SIGN" },
      { x: 27, y: 21, signId: "TEXT_CERULEANCITY_GYM_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 20,
        y: 2,
        sprite: "SPRITE_BLUE",
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_RIVAL"
      },
      {
        type: "trainer",
        x: 30,
        y: 8,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_ROCKET",
        trainerId: "OPP_ROCKET",
        trainerLevel: 5
      },
      {
        type: "sprite",
        x: 31,
        y: 20,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 15,
        y: 18,
        sprite: "SPRITE_SUPER_NERD",
        movement: "WALK",
        textId: "TEXT_CERULEANCITY_SUPER_NERD1"
      },
      {
        type: "sprite",
        x: 9,
        y: 21,
        sprite: "SPRITE_SUPER_NERD",
        movement: "WALK",
        textId: "TEXT_CERULEANCITY_SUPER_NERD2"
      },
      {
        type: "sprite",
        x: 28,
        y: 12,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_GUARD1"
      },
      {
        type: "sprite",
        x: 29,
        y: 26,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_COOLTRAINER_F1"
      },
      {
        type: "sprite",
        x: 28,
        y: 26,
        sprite: "SPRITE_MONSTER",
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_SLOWBRO"
      },
      {
        type: "sprite",
        x: 9,
        y: 27,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "WALK",
        textId: "TEXT_CERULEANCITY_COOLTRAINER_F2"
      },
      {
        type: "sprite",
        x: 4,
        y: 12,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_SUPER_NERD3"
      },
      {
        type: "sprite",
        x: 27,
        y: 12,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_GUARD2"
      }
    ]
  },
  textPointers: []
};
