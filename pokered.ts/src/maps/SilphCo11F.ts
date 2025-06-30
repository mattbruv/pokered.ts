import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_11F_BLOCKS } from "../data/blocks/SilphCo11F";

export const SilphCo11F: Map = {
  width: 9,
  height: 9,
  borderBlock: 13,
  blocks: SILPH_CO_11F_BLOCKS,
  tileset: Tileset.INTERIOR,
  connections: {},
  objects: {
    warps: [
      { x: 9, y: 0, toMap: MapName.SilphCo10F, warpIndex: 1 },
      { x: 13, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 5, y: 5, toMap: "LAST_MAP", warpIndex: 9 },
      { x: 3, y: 2, toMap: MapName.SilphCo7F, warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 7,
        y: 5,
        sprite: "SPRITE_SILPH_PRESIDENT",
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_SILPH_PRESIDENT"
      },
      {
        type: "sprite",
        x: 10,
        y: 5,
        sprite: "SPRITE_BEAUTY",
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_BEAUTY"
      },
      {
        type: "trainer",
        x: 6,
        y: 9,
        sprite: "SPRITE_GIOVANNI",
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_GIOVANNI",
        trainerId: "OPP_GIOVANNI",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 3,
        y: 16,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 41
      },
      {
        type: "trainer",
        x: 15,
        y: 9,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 40
      }
    ]
  },
  textPointers: []
};
