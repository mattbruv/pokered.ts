import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_GYM_BLOCKS } from "../data/blocks/CeruleanGym";
import { OverworldSprite } from "../sprite";

export const CeruleanGym: Map = {
  width: 5,
  height: 7,
  borderBlock: 3,
  blocks: CERULEAN_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 13, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 5, y: 13, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 2,
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CERULEANGYM_MISTY",
        trainerId: "OPP_MISTY",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 2,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_CERULEANGYM_COOLTRAINER_F",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 8,
        y: 7,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_CERULEANGYM_SWIMMER",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 1
      },
      {
        type: "sprite",
        x: 7,
        y: 10,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_CERULEANGYM_GYM_GUIDE"
      }
    ]
  },
  text: {
    _CeruleanGymMistyPreBattleText: [
      ["text", "Hi, you're a new"],
      ["line", "face!"],
      ["para", "Trainers who want"],
      ["line", "to turn pro have"],
      ["cont", "to have a policy"],
      ["cont", "about #MON!"],
      ["para", "What is your"],
      ["line", "approach when you"],
      ["cont", "catch #MON?"],
      ["para", "My policy is an"],
      ["line", "all-out offensive"],
      ["cont", "with water-type"],
      ["cont", "#MON!"]
    ],
    _CeruleanGymMistyTM11ExplanationText: [
      ["text", "TM11 teaches"],
      ["line", "BUBBLEBEAM!"],
      ["para", "Use it on an"],
      ["line", "aquatic #MON!"]
    ],
    _CeruleanGymMistyCascadeBadgeInfoText: [
      ["text", "The CASCADEBADGE"],
      ["line", "makes all #MON"],
      ["cont", "up to L30 obey!"],
      ["para", "That includes"],
      ["line", "even outsiders!"],
      ["para", "There's more, you"],
      ["line", "can now use CUT"],
      ["cont", "any time!"],
      ["para", "You can CUT down"],
      ["line", "small bushes to"],
      ["cont", "open new paths!"],
      ["para", "You can also have"],
      ["line", "my favorite TM!"]
    ],
    _CeruleanGymMistyReceivedTM11Text: [
      ["text", "<PLAYER> received"],
      ["line", "TM11!@"],
      ["text_end"]
    ],
    _CeruleanGymMistyTM11NoRoomText: [
      ["text", "You better make"],
      ["line", "room for this!"]
    ],
    _CeruleanGymMistyReceivedCascadeBadgeText: [
      ["text", "Wow!"],
      ["line", "You're too much!"],
      ["para", "All right!"],
      ["para", "You can have the"],
      ["line", "CASCADEBADGE to"],
      ["cont", "show you beat me!@"],
      ["text_end"]
    ],
    _CeruleanGymBattleText1: [
      ["text", "I'm more than good"],
      ["line", "enough for you!"],
      ["para", "MISTY can wait!"]
    ],
    _CeruleanGymEndBattleText1: [
      ["text", "You"],
      ["line", "overwhelmed me!"],
      ["prompt"]
    ],
    _CeruleanGymAfterBattleText1: [
      ["text", "You have to face"],
      ["line", "other trainers to"],
      ["cont", "find out how good"],
      ["cont", "you really are."]
    ],
    _CeruleanGymBattleText2: [
      ["text", "Splash!"],
      ["para", "I'm first up!"],
      ["line", "Let's do it!"]
    ],
    _CeruleanGymEndBattleText2: [
      ["text", "That"],
      ["line", "can't be!"],
      ["prompt"]
    ],
    _CeruleanGymAfterBattleText2: [
      ["text", "MISTY is going to"],
      ["line", "keep improving!"],
      ["para", "She won't lose to"],
      ["line", "someone like you!"]
    ],
    _CeruleanGymGymGuideChampInMakingText: [
      ["text", "Yo! Champ in"],
      ["line", "making!"],
      ["para", "Here's my advice!"],
      ["para", "The LEADER, MISTY,"],
      ["line", "is a pro who uses"],
      ["cont", "water #MON!"],
      ["para", "You can drain all"],
      ["line", "their water with"],
      ["cont", "plant #MON!"],
      ["para", "Or, zap them with"],
      ["line", "electricity!"]
    ],
    _CeruleanGymGymGuideBeatMistyText: [
      ["text", "You beat MISTY!"],
      ["line", "What'd I tell ya?"],
      ["para", "You and me kid,"],
      ["line", "we make a pretty"],
      ["cont", "darn good team!"]
    ]
  }
};
