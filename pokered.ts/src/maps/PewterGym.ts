import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_GYM_BLOCKS } from "../data/blocks/PewterGym";
import { OverworldSprite } from "../sprite";

export const PewterGym: Map = {
  width: 5,
  height: 7,
  borderBlock: 3,
  blocks: PEWTER_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 13, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 5, y: 13, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 1,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_PEWTERGYM_BROCK",
        trainerId: "OPP_BROCK",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 3,
        y: 6,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_PEWTERGYM_COOLTRAINER_M",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 1
      },
      {
        type: "sprite",
        x: 7,
        y: 10,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_PEWTERGYM_GYM_GUIDE"
      }
    ]
  },
  text: {
    _PewterGymBrockPreBattleText: [
      ["text", "I'm BROCK!"],
      ["line", "I'm PEWTER's GYM"],
      ["cont", "LEADER!"],
      ["para", "I believe in rock"],
      ["line", "hard defense and"],
      ["cont", "determination!"],
      ["para", "That's why my"],
      ["line", "#MON are all"],
      ["cont", "the rock-type!"],
      ["para", "Do you still want"],
      ["line", "to challenge me?"],
      ["cont", "Fine then! Show"],
      ["cont", "me your best!"]
    ]
  }
};
