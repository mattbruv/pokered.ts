import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_7F_BLOCKS } from "../data/blocks/SilphCo7F";
import { OverworldSprite } from "../sprite";

export const SilphCo7F: Map = {
  width: 13,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_7F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 16, y: 0, toMap: MapName.SilphCo8F, warpIndex: 1 },
      { x: 22, y: 0, toMap: MapName.SilphCo6F, warpIndex: 0 },
      { x: 18, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 5, y: 7, toMap: MapName.SilphCo11F, warpIndex: 3 },
      { x: 5, y: 3, toMap: MapName.SilphCo3F, warpIndex: 8 },
      { x: 21, y: 15, toMap: MapName.SilphCo5F, warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 5,
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_SILPH_WORKER_M1"
      },
      {
        type: "sprite",
        x: 13,
        y: 13,
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_SILPH_WORKER_M2"
      },
      {
        type: "sprite",
        x: 7,
        y: 10,
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_SILPH_WORKER_M3"
      },
      {
        type: "sprite",
        x: 10,
        y: 8,
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_SILPH_WORKER_M4"
      },
      {
        type: "trainer",
        x: 13,
        y: 1,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 32
      },
      {
        type: "trainer",
        x: 2,
        y: 13,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 20,
        y: 2,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 33
      },
      {
        type: "trainer",
        x: 19,
        y: 14,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_ROCKET3",
        trainerId: "OPP_ROCKET",
        trainerLevel: 34
      },
      {
        type: "sprite",
        x: 3,
        y: 7,
        sprite: OverworldSprite.SPRITE_BLUE,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_RIVAL"
      },
      {
        type: "item",
        x: 1,
        y: 9,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_CALCIUM",
        itemId: "CALCIUM"
      },
      {
        type: "item",
        x: 24,
        y: 11,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_TM_SWORDS_DANCE",
        itemId: "TM_SWORDS_DANCE"
      }
    ]
  },
  textPointers: []
};
