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
        direction: "DOWN",
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
        direction: "DOWN",
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
        direction: "DOWN",
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
        direction: "DOWN",
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
        direction: "DOWN",
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
        direction: "DOWN",
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
        direction: "DOWN",
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
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_SUPER_NERD7",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 12
      },
      {
        type: "sprite",
        x: 16,
        y: 13,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_CINNABARGYM_GYM_GUIDE"
      }
    ]
  },
  text: {
    _CinnabarGymBlainePreBattleText: [
      ["text", "Hah!"],
      ["para", "I am BLAINE! I"],
      ["line", "am the LEADER of"],
      ["cont", "CINNABAR GYM!"],
      ["para", "My fiery #MON"],
      ["line", "will incinerate"],
      ["cont", "all challengers!"],
      ["para", "Hah! You better"],
      ["line", "have BURN HEAL!"]
    ],
    _CinnabarGymBlaineReceivedVolcanoBadgeText: [
      ["text", "I have"],
      ["line", "burnt out!"],
      ["para", "You have earned"],
      ["line", "the VOLCANOBADGE!@"],
      ["text_end"]
    ],
    _CinnabarGymBlainePostBattleAdviceText: [
      ["text", "FIRE BLAST is the"],
      ["line", "ultimate fire"],
      ["cont", "technique!"],
      ["para", "Don't waste it on"],
      ["line", "water #MON!"]
    ],
    _CinnabarGymBlaineVolcanoBadgeInfoText: [
      ["text", "Hah!"],
      ["para", "The VOLCANOBADGE"],
      ["line", "heightens the"],
      ["cont", "SPECIAL abilities"],
      ["cont", "of your #MON!"],
      ["para", "Here, you can"],
      ["line", "have this too!"]
    ],
    _CinnabarGymBlaineReceivedTM38Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _CinnabarGymBlaineTM38ExplanationText: [
      ["text_start"],
      ["para", "TM38 contains"],
      ["line", "FIRE BLAST!"],
      ["para", "Teach it to fire-"],
      ["line", "type #MON!"],
      ["para", "CHARMELEON or"],
      ["line", "PONYTA would be"],
      ["cont", "good bets!"]
    ],
    _CinnabarGymBlaineTM38NoRoomText: [
      ["text", "Make room for my"],
      ["line", "gift!"]
    ],
    _CinnabarGymSuperNerd1BattleText: [
      ["text", "Do you know how"],
      ["line", "hot #MON fire"],
      ["cont", "breath can get?"]
    ],
    _CinnabarGymSuperNerd1EndBattleText: [
      ["text", "Yow!"],
      ["line", "Hot, hot, hot!"],
      ["prompt"]
    ],
    _CinnabarGymSuperNerd1AfterBattleText: [
      ["text", "Fire, or to be"],
      ["line", "more precise,"],
      ["cont", "combustion..."],
      ["para", "Blah, blah, blah,"],
      ["line", "blah..."]
    ],
    _CinnabarGymSuperNerd2BattleText: [
      ["text", "I was a thief, but"],
      ["line", "I became straight"],
      ["cont", "as a trainer!"]
    ],
    _CinnabarGymSuperNerd2EndBattleText: [
      ["text", "I"],
      ["line", "surrender!"],
      ["prompt"]
    ],
    _CinnabarGymSuperNerd2AfterBattleText: [
      ["text", "I can't help"],
      ["line", "stealing other"],
      ["cont", "people's #MON!"]
    ],
    _CinnabarGymSuperNerd3BattleText: [
      ["text", "You can't win!"],
      ["line", "I have studied"],
      ["cont", "#MON totally!"]
    ],
    _CinnabarGymSuperNerd3EndBattleText: [
      ["text", "Waah!"],
      ["line", "My studies!"],
      ["prompt"]
    ],
    _CinnabarGymSuperNerd3AfterBattleText: [
      ["text", "My theories are"],
      ["line", "too complicated"],
      ["cont", "for you!"]
    ],
    _CinnabarGymSuperNerd4BattleText: [
      ["text", "I just like using"],
      ["line", "fire #MON!"]
    ],
    _CinnabarGymSuperNerd4EndBattleText: [
      ["text", "Too hot"],
      ["line", "to handle!"],
      ["prompt"]
    ],
    _CinnabarGymSuperNerd4AfterBattleText: [
      ["text", "I wish there was"],
      ["line", "a thief #MON!"],
      ["cont", "I'd use that!"]
    ],
    _CinnabarGymSuperNerd5BattleText: [
      ["text", "I know why BLAINE"],
      ["line", "became a trainer!"]
    ],
    _CinnabarGymSuperNerd5EndBattleText: [["text", "Ow!"], ["prompt"]],
    _CinnabarGymSuperNerd5AfterBattleText: [
      ["text", "BLAINE was lost"],
      ["line", "in the mountains"],
      ["cont", "when a fiery bird"],
      ["cont", "#MON appeared."],
      ["para", "Its light enabled"],
      ["line", "BLAINE to find"],
      ["cont", "his way down!"]
    ],
    _CinnabarGymSuperNerd6BattleText: [
      ["text", "I've been to many"],
      ["line", "GYMs, but this is"],
      ["cont", "my favorite!"]
    ],
    _CinnabarGymSuperNerd6EndBattleText: [
      ["text", "Yowza!"],
      ["line", "Too hot!"],
      ["prompt"]
    ],
    _CinnabarGymSuperNerd6AfterBattleText: [
      ["text", "Us fire #MON"],
      ["line", "fans like PONYTA"],
      ["cont", "and NINETALES!"]
    ],
    _CinnabarGymSuperNerd7BattleText: [
      ["text", "Fire is weak"],
      ["line", "against H2O!"]
    ],
    _CinnabarGymSuperNerd7EndBattleText: [
      ["text", "Oh!"],
      ["line", "Snuffed out!"],
      ["prompt"]
    ],
    _CinnabarGymSuperNerd7AfterBattleText: [
      ["text", "Water beats fire!"],
      ["line", "But, fire melts"],
      ["cont", "ice #MON!"]
    ],
    _CinnabarGymGymGuideChampInMakingText: [
      ["text", "Yo! Champ in"],
      ["line", "making!"],
      ["para", "The hot-headed"],
      ["line", "BLAINE is a fire"],
      ["cont", "#MON pro!"],
      ["para", "Douse his spirits"],
      ["line", "with water!"],
      ["para", "You better take"],
      ["line", "some BURN HEALs!"]
    ],
    _CinnabarGymGymGuideBeatBlaineText: [
      ["text", "<PLAYER>! You beat"],
      ["line", "that fire brand!"]
    ]
  }
};
