import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_GYM_BLOCKS } from "../data/blocks/FuchsiaGym";
import { OverworldSprite } from "../sprite";

export const FuchsiaGym: Map = {
  width: 5,
  height: 9,
  borderBlock: 3,
  blocks: FUCHSIA_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 17, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 5, y: 17, toMap: "LAST_MAP", warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 10,
        sprite: OverworldSprite.SPRITE_KOGA,
        movement: "STAY",
        textId: "TEXT_FUCHSIAGYM_KOGA",
        trainerId: "OPP_KOGA",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 8,
        y: 13,
        sprite: OverworldSprite.SPRITE_ROCKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAGYM_ROCKER1",
        trainerId: "OPP_JUGGLER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 7,
        y: 8,
        sprite: OverworldSprite.SPRITE_ROCKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAGYM_ROCKER2",
        trainerId: "OPP_JUGGLER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 1,
        y: 12,
        sprite: OverworldSprite.SPRITE_ROCKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAGYM_ROCKER3",
        trainerId: "OPP_JUGGLER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 3,
        y: 5,
        sprite: OverworldSprite.SPRITE_ROCKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAGYM_ROCKER4",
        trainerId: "OPP_TAMER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 8,
        y: 2,
        sprite: OverworldSprite.SPRITE_ROCKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAGYM_ROCKER5",
        trainerId: "OPP_TAMER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 2,
        y: 7,
        sprite: OverworldSprite.SPRITE_ROCKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAGYM_ROCKER6",
        trainerId: "OPP_JUGGLER",
        trainerLevel: 4
      },
      {
        type: "sprite",
        x: 7,
        y: 15,
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_FUCHSIAGYM_GYM_GUIDE"
      }
    ]
  },
  textPointers: []
};
