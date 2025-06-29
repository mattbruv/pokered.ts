import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_1F_ROOMS_BLOCKS } from "../data/blocks/SSAnne1FRooms";

export const SSAnne1FRooms: Map = {
  width: 12,
  height: 8,
  borderBlock: 12,
  blocks: SS_ANNE_1F_ROOMS_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 0, toMap: "SS_ANNE_1F", warpId: 3 },
      { x: 10, y: 0, toMap: "SS_ANNE_1F", warpId: 4 },
      { x: 20, y: 0, toMap: "SS_ANNE_1F", warpId: 5 },
      { x: 0, y: 10, toMap: "SS_ANNE_1F", warpId: 6 },
      { x: 10, y: 10, toMap: "SS_ANNE_1F", warpId: 7 },
      { x: 20, y: 10, toMap: "SS_ANNE_1F", warpId: 8 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 2,
        y: 3,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_GENTLEMAN1",
        trainerId: "OPP_GENTLEMAN",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 11,
        y: 4,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_GENTLEMAN2",
        trainerId: "OPP_GENTLEMAN",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 11,
        y: 14,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_YOUNGSTER",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 13,
        y: 11,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_COOLTRAINER_F",
        trainerId: "OPP_LASS",
        trainerLevel: 11
      },
      {
        type: "sprite",
        x: 22,
        y: 3,
        sprite: "SPRITE_GIRL",
        movement: "WALK",
        textId: "TEXT_SSANNE1FROOMS_GIRL1"
      },
      {
        type: "sprite",
        x: 0,
        y: 14,
        sprite: "SPRITE_MIDDLE_AGED_MAN",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_MIDDLE_AGED_MAN"
      },
      {
        type: "sprite",
        x: 2,
        y: 11,
        sprite: "SPRITE_LITTLE_GIRL",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 3,
        y: 11,
        sprite: "SPRITE_FAIRY",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_WIGGLYTUFF"
      },
      {
        type: "sprite",
        x: 10,
        y: 13,
        sprite: "SPRITE_GIRL",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_GIRL2"
      },
      {
        type: "item",
        x: 12,
        y: 15,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_TM_BODY_SLAM",
        itemId: "TM_BODY_SLAM"
      },
      {
        type: "sprite",
        x: 21,
        y: 13,
        sprite: "SPRITE_GENTLEMAN",
        movement: "WALK",
        textId: "TEXT_SSANNE1FROOMS_GENTLEMAN3"
      }
    ]
  },
  textPointers: []
};
