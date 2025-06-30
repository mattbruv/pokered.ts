import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_GYM_BLOCKS } from "../data/blocks/CinnabarGym";
import { OverworldSprite } from "../sprite";

export const CinnabarGym: Map = {
  width: 10,
  height: 9,
  borderBlock: 46,
  blocks: CINNABAR_GYM_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 16, y: 17, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 17, y: 17, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 3,
        y: 3,
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_BLAINE",
        trainerId: "OPP_BLAINE",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 17,
        y: 2,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_SUPER_NERD1",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 17,
        y: 8,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_SUPER_NERD2",
        trainerId: "OPP_BURGLAR",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 11,
        y: 4,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_SUPER_NERD3",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 11,
        y: 8,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_SUPER_NERD4",
        trainerId: "OPP_BURGLAR",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 11,
        y: 14,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_SUPER_NERD5",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 3,
        y: 14,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_SUPER_NERD6",
        trainerId: "OPP_BURGLAR",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 3,
        y: 8,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_SUPER_NERD7",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 12
      },
      {
        type: "sprite",
        x: 16,
        y: 13,
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_GYM_GUIDE"
      }
    ]
  },
  textPointers: []
};
