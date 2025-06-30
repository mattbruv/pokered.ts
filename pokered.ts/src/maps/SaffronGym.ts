import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_GYM_BLOCKS } from "../data/blocks/SaffronGym";

export const SaffronGym: Map = {
  width: 10,
  height: 9,
  borderBlock: 46,
  blocks: SAFFRON_GYM_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 8, y: 17, toMap: "LAST_MAP", warpId: 3 },
      { x: 9, y: 17, toMap: "LAST_MAP", warpId: 3 },
      { x: 1, y: 3, toMap: MapName.SaffronGym, warpId: 23 },
      { x: 5, y: 3, toMap: MapName.SaffronGym, warpId: 16 },
      { x: 1, y: 5, toMap: MapName.SaffronGym, warpId: 19 },
      { x: 5, y: 5, toMap: MapName.SaffronGym, warpId: 9 },
      { x: 1, y: 9, toMap: MapName.SaffronGym, warpId: 28 },
      { x: 5, y: 9, toMap: MapName.SaffronGym, warpId: 17 },
      { x: 1, y: 11, toMap: MapName.SaffronGym, warpId: 6 },
      { x: 5, y: 11, toMap: MapName.SaffronGym, warpId: 14 },
      { x: 1, y: 15, toMap: MapName.SaffronGym, warpId: 24 },
      { x: 5, y: 15, toMap: MapName.SaffronGym, warpId: 31 },
      { x: 1, y: 17, toMap: MapName.SaffronGym, warpId: 18 },
      { x: 5, y: 17, toMap: MapName.SaffronGym, warpId: 10 },
      { x: 9, y: 3, toMap: MapName.SaffronGym, warpId: 27 },
      { x: 11, y: 3, toMap: MapName.SaffronGym, warpId: 4 },
      { x: 9, y: 5, toMap: MapName.SaffronGym, warpId: 8 },
      { x: 11, y: 5, toMap: MapName.SaffronGym, warpId: 13 },
      { x: 11, y: 11, toMap: MapName.SaffronGym, warpId: 5 },
      { x: 11, y: 15, toMap: MapName.SaffronGym, warpId: 32 },
      { x: 15, y: 3, toMap: MapName.SaffronGym, warpId: 25 },
      { x: 19, y: 3, toMap: MapName.SaffronGym, warpId: 29 },
      { x: 15, y: 5, toMap: MapName.SaffronGym, warpId: 3 },
      { x: 19, y: 5, toMap: MapName.SaffronGym, warpId: 11 },
      { x: 15, y: 9, toMap: MapName.SaffronGym, warpId: 21 },
      { x: 19, y: 9, toMap: MapName.SaffronGym, warpId: 30 },
      { x: 15, y: 11, toMap: MapName.SaffronGym, warpId: 15 },
      { x: 19, y: 11, toMap: MapName.SaffronGym, warpId: 7 },
      { x: 15, y: 15, toMap: MapName.SaffronGym, warpId: 22 },
      { x: 19, y: 15, toMap: MapName.SaffronGym, warpId: 26 },
      { x: 15, y: 17, toMap: MapName.SaffronGym, warpId: 12 },
      { x: 19, y: 17, toMap: MapName.SaffronGym, warpId: 20 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 9,
        y: 8,
        sprite: "SPRITE_GIRL",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_SABRINA",
        trainerId: "OPP_SABRINA",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 10,
        y: 1,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_CHANNELER1",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 22
      },
      {
        type: "trainer",
        x: 17,
        y: 1,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_YOUNGSTER1",
        trainerId: "OPP_PSYCHIC_TR",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 3,
        y: 7,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_CHANNELER2",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 23
      },
      {
        type: "trainer",
        x: 17,
        y: 7,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_YOUNGSTER2",
        trainerId: "OPP_PSYCHIC_TR",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 3,
        y: 13,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 24
      },
      {
        type: "trainer",
        x: 17,
        y: 13,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_YOUNGSTER3",
        trainerId: "OPP_PSYCHIC_TR",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 3,
        y: 1,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_YOUNGSTER4",
        trainerId: "OPP_PSYCHIC_TR",
        trainerLevel: 4
      },
      {
        type: "sprite",
        x: 10,
        y: 15,
        sprite: "SPRITE_GYM_GUIDE",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_GYM_GUIDE"
      }
    ]
  },
  textPointers: []
};
