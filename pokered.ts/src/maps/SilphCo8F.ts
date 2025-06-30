import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_8F_BLOCKS } from "../data/blocks/SilphCo8F";

export const SilphCo8F: Map = {
  width: 13,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_8F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 16, y: 0, toMap: MapName.SilphCo9F, warpIndex: 1 },
      { x: 14, y: 0, toMap: MapName.SilphCo7F, warpIndex: 0 },
      { x: 18, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 3, y: 11, toMap: MapName.SilphCo8F, warpIndex: 6 },
      { x: 3, y: 15, toMap: MapName.SilphCo2F, warpIndex: 4 },
      { x: 11, y: 5, toMap: MapName.SilphCo2F, warpIndex: 5 },
      { x: 11, y: 9, toMap: MapName.SilphCo8F, warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_SILPHCO8F_SILPH_WORKER_M"
      },
      {
        type: "trainer",
        x: 19,
        y: 2,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO8F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 35
      },
      {
        type: "trainer",
        x: 10,
        y: 2,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_SILPHCO8F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 12,
        y: 15,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO8F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 36
      }
    ]
  },
  textPointers: []
};
