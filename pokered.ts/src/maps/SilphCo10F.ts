import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_10F_BLOCKS } from "../data/blocks/SilphCo10F";

export const SilphCo10F: Map = {
  width: 8,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_10F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 8, y: 0, toMap: MapName.SilphCo9F, warpIndex: 0 },
      { x: 10, y: 0, toMap: MapName.SilphCo11F, warpIndex: 0 },
      { x: 12, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 9, y: 11, toMap: MapName.SilphCo4F, warpIndex: 3 },
      { x: 13, y: 15, toMap: MapName.SilphCo4F, warpIndex: 5 },
      { x: 13, y: 7, toMap: MapName.SilphCo4F, warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 1,
        y: 9,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO10F_ROCKET",
        trainerId: "OPP_ROCKET",
        trainerLevel: 39
      },
      {
        type: "trainer",
        x: 10,
        y: 2,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_SILPHCO10F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 11
      },
      {
        type: "sprite",
        x: 9,
        y: 15,
        sprite: "SPRITE_SILPH_WORKER_F",
        movement: "WALK",
        textId: "TEXT_SILPHCO10F_SILPH_WORKER_F"
      },
      {
        type: "item",
        x: 2,
        y: 12,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SILPHCO10F_TM_EARTHQUAKE",
        itemId: "TM_EARTHQUAKE"
      },
      {
        type: "item",
        x: 4,
        y: 14,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SILPHCO10F_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "item",
        x: 5,
        y: 11,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SILPHCO10F_CARBOS",
        itemId: "CARBOS"
      }
    ]
  },
  textPointers: []
};
