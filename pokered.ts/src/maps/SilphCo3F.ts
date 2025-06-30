import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_3F_BLOCKS } from "../data/blocks/SilphCo3F";

export const SilphCo3F: Map = {
  width: 15,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_3F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 26, y: 0, toMap: MapName.SilphCo2F, warpId: 2 },
      { x: 24, y: 0, toMap: MapName.SilphCo4F, warpId: 1 },
      { x: 20, y: 0, toMap: MapName.SilphCoElevator, warpId: 1 },
      { x: 23, y: 11, toMap: MapName.SilphCo3F, warpId: 10 },
      { x: 3, y: 3, toMap: MapName.SilphCo5F, warpId: 6 },
      { x: 3, y: 15, toMap: MapName.SilphCo5F, warpId: 7 },
      { x: 27, y: 3, toMap: MapName.SilphCo2F, warpId: 4 },
      { x: 3, y: 11, toMap: MapName.SilphCo9F, warpId: 4 },
      { x: 11, y: 11, toMap: MapName.SilphCo7F, warpId: 5 },
      { x: 27, y: 15, toMap: MapName.SilphCo3F, warpId: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 24,
        y: 8,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_SILPHCO3F_SILPH_WORKER_M"
      },
      {
        type: "trainer",
        x: 20,
        y: 7,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO3F_ROCKET",
        trainerId: "OPP_ROCKET",
        trainerLevel: 25
      },
      {
        type: "trainer",
        x: 7,
        y: 9,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_SILPHCO3F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 4
      },
      {
        type: "item",
        x: 8,
        y: 5,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SILPHCO3F_HYPER_POTION",
        itemId: "HYPER_POTION"
      }
    ]
  },
  textPointers: []
};
