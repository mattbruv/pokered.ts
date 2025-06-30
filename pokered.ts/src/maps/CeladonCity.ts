import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_CITY_BLOCKS } from "../data/blocks/CeladonCity";
import { OverworldSprite } from "../sprite";

export const CeladonCity: Map = {
  width: 25,
  height: 18,
  borderBlock: 15,
  blocks: CELADON_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.Route16, xOffset: 4 },
    east: { map: MapName.Route7, xOffset: 4 }
  },
  objects: {
    warps: [
      { x: 8, y: 13, toMap: MapName.CeladonMart1F, warpIndex: 0 },
      { x: 10, y: 13, toMap: MapName.CeladonMart1F, warpIndex: 2 },
      { x: 24, y: 9, toMap: MapName.CeladonMansion1F, warpIndex: 0 },
      { x: 24, y: 3, toMap: MapName.CeladonMansion1F, warpIndex: 2 },
      { x: 25, y: 3, toMap: MapName.CeladonMansion1F, warpIndex: 2 },
      { x: 41, y: 9, toMap: MapName.CeladonPokecenter, warpIndex: 0 },
      { x: 12, y: 27, toMap: MapName.CeladonGym, warpIndex: 0 },
      { x: 28, y: 19, toMap: MapName.GameCorner, warpIndex: 0 },
      { x: 39, y: 19, toMap: MapName.CeladonMart5F, warpIndex: 0 },
      { x: 33, y: 19, toMap: MapName.GameCornerPrizeRoom, warpIndex: 0 },
      { x: 31, y: 27, toMap: MapName.CeladonDiner, warpIndex: 0 },
      { x: 35, y: 27, toMap: MapName.CeladonChiefHouse, warpIndex: 0 },
      { x: 43, y: 27, toMap: MapName.CeladonHotel, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 27, y: 15, signId: "TEXT_CELADONCITY_TRAINER_TIPS1" },
      { x: 19, y: 15, signId: "TEXT_CELADONCITY_SIGN" },
      { x: 42, y: 9, signId: "TEXT_CELADONCITY_POKECENTER_SIGN" },
      { x: 13, y: 29, signId: "TEXT_CELADONCITY_GYM_SIGN" },
      { x: 21, y: 9, signId: "TEXT_CELADONCITY_MANSION_SIGN" },
      { x: 12, y: 13, signId: "TEXT_CELADONCITY_DEPTSTORE_SIGN" },
      { x: 39, y: 21, signId: "TEXT_CELADONCITY_TRAINER_TIPS2" },
      { x: 33, y: 21, signId: "TEXT_CELADONCITY_PRIZEEXCHANGE_SIGN" },
      { x: 27, y: 21, signId: "TEXT_CELADONCITY_GAMECORNER_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 17,
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "WALK",
        textId: "TEXT_CELADONCITY_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 11,
        y: 28,
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_GRAMPS1"
      },
      {
        type: "sprite",
        x: 14,
        y: 19,
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_CELADONCITY_GIRL"
      },
      {
        type: "sprite",
        x: 25,
        y: 22,
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_GRAMPS2"
      },
      {
        type: "sprite",
        x: 22,
        y: 16,
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_GRAMPS3"
      },
      {
        type: "sprite",
        x: 32,
        y: 12,
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_FISHER"
      },
      {
        type: "sprite",
        x: 30,
        y: 12,
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_POLIWRATH"
      },
      {
        type: "sprite",
        x: 32,
        y: 29,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "WALK",
        textId: "TEXT_CELADONCITY_ROCKET1"
      },
      {
        type: "sprite",
        x: 42,
        y: 14,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "WALK",
        textId: "TEXT_CELADONCITY_ROCKET2"
      }
    ]
  },
  textPointers: []
};
