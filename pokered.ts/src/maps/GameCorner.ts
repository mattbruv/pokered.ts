import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { GAME_CORNER_BLOCKS } from "../data/blocks/GameCorner";

export const GameCorner: Map = {
  width: 10,
  height: 9,
  borderBlock: 15,
  blocks: GAME_CORNER_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 15, y: 17, toMap: "LAST_MAP", warpIndex: 7 },
      { x: 16, y: 17, toMap: "LAST_MAP", warpIndex: 7 },
      { x: 17, y: 4, toMap: MapName.RocketHideoutB1F, warpIndex: 1 }
    ],
    backgroundItems: [{ x: 9, y: 4, signId: "TEXT_GAMECORNER_POSTER" }],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 6,
        sprite: "SPRITE_BEAUTY",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_BEAUTY1"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_CLERK1"
      },
      {
        type: "sprite",
        x: 2,
        y: 10,
        sprite: "SPRITE_MIDDLE_AGED_MAN",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_MIDDLE_AGED_MAN1"
      },
      {
        type: "sprite",
        x: 2,
        y: 13,
        sprite: "SPRITE_BEAUTY",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_BEAUTY2"
      },
      {
        type: "sprite",
        x: 5,
        y: 11,
        sprite: "SPRITE_FISHING_GURU",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_FISHING_GURU"
      },
      {
        type: "sprite",
        x: 8,
        y: 11,
        sprite: "SPRITE_MIDDLE_AGED_WOMAN",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 8,
        y: 14,
        sprite: "SPRITE_GYM_GUIDE",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_GYM_GUIDE"
      },
      {
        type: "sprite",
        x: 11,
        y: 15,
        sprite: "SPRITE_GAMBLER",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_GAMBLER"
      },
      {
        type: "sprite",
        x: 14,
        y: 11,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_CLERK2"
      },
      {
        type: "sprite",
        x: 17,
        y: 13,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_GENTLEMAN"
      },
      {
        type: "trainer",
        x: 9,
        y: 5,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_ROCKET",
        trainerId: "OPP_ROCKET",
        trainerLevel: 7
      }
    ]
  },
  textPointers: []
};
