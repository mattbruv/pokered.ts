import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_2F_BLOCKS } from "../data/blocks/SilphCo2F";
import { OverworldSprite } from "../sprite";

export const SilphCo2F: Map = {
  width: 15,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_2F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 24, y: 0, toMap: MapName.SilphCo1F, warpIndex: 2 },
      { x: 26, y: 0, toMap: MapName.SilphCo3F, warpIndex: 0 },
      { x: 20, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 3, y: 3, toMap: MapName.SilphCo3F, warpIndex: 6 },
      { x: 13, y: 3, toMap: MapName.SilphCo8F, warpIndex: 4 },
      { x: 27, y: 15, toMap: MapName.SilphCo8F, warpIndex: 5 },
      { x: 9, y: 15, toMap: MapName.SilphCo6F, warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 1,
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_SILPH_WORKER_F"
      },
      {
        type: "trainer",
        x: 5,
        y: 12,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_SCIENTIST1",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 24,
        y: 13,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_SCIENTIST2",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 16,
        y: 11,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 23
      },
      {
        type: "trainer",
        x: 24,
        y: 7,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 24
      }
    ]
  },
  textPointers: []
};
