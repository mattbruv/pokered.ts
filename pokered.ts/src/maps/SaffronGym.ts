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
      { x: 8, y: 17, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 9, y: 17, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 1, y: 3, toMap: MapName.SaffronGym, warpIndex: 22 },
      { x: 5, y: 3, toMap: MapName.SaffronGym, warpIndex: 15 },
      { x: 1, y: 5, toMap: MapName.SaffronGym, warpIndex: 18 },
      { x: 5, y: 5, toMap: MapName.SaffronGym, warpIndex: 8 },
      { x: 1, y: 9, toMap: MapName.SaffronGym, warpIndex: 27 },
      { x: 5, y: 9, toMap: MapName.SaffronGym, warpIndex: 16 },
      { x: 1, y: 11, toMap: MapName.SaffronGym, warpIndex: 5 },
      { x: 5, y: 11, toMap: MapName.SaffronGym, warpIndex: 13 },
      { x: 1, y: 15, toMap: MapName.SaffronGym, warpIndex: 23 },
      { x: 5, y: 15, toMap: MapName.SaffronGym, warpIndex: 30 },
      { x: 1, y: 17, toMap: MapName.SaffronGym, warpIndex: 17 },
      { x: 5, y: 17, toMap: MapName.SaffronGym, warpIndex: 9 },
      { x: 9, y: 3, toMap: MapName.SaffronGym, warpIndex: 26 },
      { x: 11, y: 3, toMap: MapName.SaffronGym, warpIndex: 3 },
      { x: 9, y: 5, toMap: MapName.SaffronGym, warpIndex: 7 },
      { x: 11, y: 5, toMap: MapName.SaffronGym, warpIndex: 12 },
      { x: 11, y: 11, toMap: MapName.SaffronGym, warpIndex: 4 },
      { x: 11, y: 15, toMap: MapName.SaffronGym, warpIndex: 31 },
      { x: 15, y: 3, toMap: MapName.SaffronGym, warpIndex: 24 },
      { x: 19, y: 3, toMap: MapName.SaffronGym, warpIndex: 28 },
      { x: 15, y: 5, toMap: MapName.SaffronGym, warpIndex: 2 },
      { x: 19, y: 5, toMap: MapName.SaffronGym, warpIndex: 10 },
      { x: 15, y: 9, toMap: MapName.SaffronGym, warpIndex: 20 },
      { x: 19, y: 9, toMap: MapName.SaffronGym, warpIndex: 29 },
      { x: 15, y: 11, toMap: MapName.SaffronGym, warpIndex: 14 },
      { x: 19, y: 11, toMap: MapName.SaffronGym, warpIndex: 6 },
      { x: 15, y: 15, toMap: MapName.SaffronGym, warpIndex: 21 },
      { x: 19, y: 15, toMap: MapName.SaffronGym, warpIndex: 25 },
      { x: 15, y: 17, toMap: MapName.SaffronGym, warpIndex: 11 },
      { x: 19, y: 17, toMap: MapName.SaffronGym, warpIndex: 19 }
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
