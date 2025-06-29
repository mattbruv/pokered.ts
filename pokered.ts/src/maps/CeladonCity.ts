import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_CITY_BLOCKS } from "../data/blocks/CeladonCity";

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
      { x: 8, y: 13, toMap: "CELADON_MART_1F", warpId: 1 },
      { x: 10, y: 13, toMap: "CELADON_MART_1F", warpId: 3 },
      { x: 24, y: 9, toMap: "CELADON_MANSION_1F", warpId: 1 },
      { x: 24, y: 3, toMap: "CELADON_MANSION_1F", warpId: 3 },
      { x: 25, y: 3, toMap: "CELADON_MANSION_1F", warpId: 3 },
      { x: 41, y: 9, toMap: "CELADON_POKECENTER", warpId: 1 },
      { x: 12, y: 27, toMap: "CELADON_GYM", warpId: 1 },
      { x: 28, y: 19, toMap: "GAME_CORNER", warpId: 1 },
      { x: 39, y: 19, toMap: "CELADON_MART_5F", warpId: 1 },
      { x: 33, y: 19, toMap: "GAME_CORNER_PRIZE_ROOM", warpId: 1 },
      { x: 31, y: 27, toMap: "CELADON_DINER", warpId: 1 },
      { x: 35, y: 27, toMap: "CELADON_CHIEF_HOUSE", warpId: 1 },
      { x: 43, y: 27, toMap: "CELADON_HOTEL", warpId: 1 }
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
        sprite: "SPRITE_LITTLE_GIRL",
        movement: "WALK",
        textId: "TEXT_CELADONCITY_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 11,
        y: 28,
        sprite: "SPRITE_GRAMPS",
        movement: "STAY",
        textId: "TEXT_CELADONCITY_GRAMPS1"
      },
      {
        type: "sprite",
        x: 14,
        y: 19,
        sprite: "SPRITE_GIRL",
        movement: "WALK",
        textId: "TEXT_CELADONCITY_GIRL"
      },
      {
        type: "sprite",
        x: 25,
        y: 22,
        sprite: "SPRITE_GRAMPS",
        movement: "STAY",
        textId: "TEXT_CELADONCITY_GRAMPS2"
      },
      {
        type: "sprite",
        x: 22,
        y: 16,
        sprite: "SPRITE_GRAMPS",
        movement: "STAY",
        textId: "TEXT_CELADONCITY_GRAMPS3"
      },
      {
        type: "sprite",
        x: 32,
        y: 12,
        sprite: "SPRITE_FISHER",
        movement: "STAY",
        textId: "TEXT_CELADONCITY_FISHER"
      },
      {
        type: "sprite",
        x: 30,
        y: 12,
        sprite: "SPRITE_MONSTER",
        movement: "STAY",
        textId: "TEXT_CELADONCITY_POLIWRATH"
      },
      {
        type: "sprite",
        x: 32,
        y: 29,
        sprite: "SPRITE_ROCKET",
        movement: "WALK",
        textId: "TEXT_CELADONCITY_ROCKET1"
      },
      {
        type: "sprite",
        x: 42,
        y: 14,
        sprite: "SPRITE_ROCKET",
        movement: "WALK",
        textId: "TEXT_CELADONCITY_ROCKET2"
      }
    ]
  },
  textPointers: []
};
