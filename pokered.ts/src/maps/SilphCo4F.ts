import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_4F_BLOCKS } from "../data/blocks/SilphCo4F";

export const SilphCo4F: Map = {
  width: 15,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_4F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 24, y: 0, toMap: MapName.SilphCo3F, warpIndex: 1 },
      { x: 26, y: 0, toMap: MapName.SilphCo5F, warpIndex: 1 },
      { x: 20, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 11, y: 7, toMap: MapName.SilphCo10F, warpIndex: 3 },
      { x: 17, y: 3, toMap: MapName.SilphCo6F, warpIndex: 3 },
      { x: 3, y: 15, toMap: MapName.SilphCo10F, warpIndex: 4 },
      { x: 17, y: 11, toMap: MapName.SilphCo10F, warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 2,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_SILPHCO4F_SILPH_WORKER_M"
      },
      {
        type: "trainer",
        x: 9,
        y: 14,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO4F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 26
      },
      {
        type: "trainer",
        x: 14,
        y: 6,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_SILPHCO4F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 26,
        y: 10,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_SILPHCO4F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 27
      },
      {
        type: "item",
        x: 3,
        y: 9,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SILPHCO4F_FULL_HEAL",
        itemId: "FULL_HEAL"
      },
      {
        type: "item",
        x: 4,
        y: 7,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SILPHCO4F_MAX_REVIVE",
        itemId: "MAX_REVIVE"
      },
      {
        type: "item",
        x: 5,
        y: 8,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SILPHCO4F_ESCAPE_ROPE",
        itemId: "ESCAPE_ROPE"
      }
    ]
  },
  textPointers: []
};
