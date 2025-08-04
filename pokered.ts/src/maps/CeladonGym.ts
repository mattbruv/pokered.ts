import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_GYM_BLOCKS } from "../data/blocks/CeladonGym";
import { OverworldSprite } from "../sprite";

export const CeladonGym: Map = {
  width: 5,
  height: 9,
  borderBlock: 3,
  blocks: CELADON_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 17, toMap: "LAST_MAP", warpIndex: 6 },
      { x: 5, y: 17, toMap: "LAST_MAP", warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 3,
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CELADONGYM_ERIKA",
        trainerId: "OPP_ERIKA",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 2,
        y: 11,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_CELADONGYM_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 17
      },
      {
        type: "trainer",
        x: 7,
        y: 10,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_CELADONGYM_BEAUTY1",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 9,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CELADONGYM_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 1,
        y: 5,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CELADONGYM_BEAUTY2",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 6,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CELADONGYM_COOLTRAINER_F3",
        trainerId: "OPP_LASS",
        trainerLevel: 18
      },
      {
        type: "trainer",
        x: 3,
        y: 3,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CELADONGYM_BEAUTY3",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 5,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CELADONGYM_COOLTRAINER_F4",
        trainerId: "OPP_COOLTRAINER_F",
        trainerLevel: 1
      }
    ]
  },
  text: {
    _CeladonGymErikaPreBattleText: [
      ["text", "Hello. Lovely"],
      ["line", "weather isn't it?"],
      ["cont", "It's so pleasant."],
      ["para", "...Oh dear..."],
      ["line", "I must have dozed"],
      ["cont", "off. Welcome."],
      ["para", "My name is ERIKA."],
      ["line", "I am the LEADER"],
      ["cont", "of CELADON GYM."],
      ["para", "I teach the art of"],
      ["line", "flower arranging."],
      ["cont", "My #MON are of"],
      ["cont", "the grass-type."],
      ["para", "Oh, I'm sorry, I"],
      ["line", "had no idea that"],
      ["cont", "you wished to"],
      ["cont", "challenge me."],
      ["para", "Very well, but I"],
      ["line", "shall not lose."]
    ],
    _CeladonGymErikaReceivedRainbowBadgeText: [
      ["text", "Oh!"],
      ["line", "I concede defeat."],
      ["para", "You are remarkably"],
      ["line", "strong."],
      ["para", "I must confer you"],
      ["line", "the RAINBOWBADGE."],
      ["prompt"]
    ],
    _CeladonGymErikaPostBattleAdviceText: [
      ["text", "You are cataloging"],
      ["line", "#MON? I must"],
      ["cont", "say I'm impressed."],
      ["para", "I would never"],
      ["line", "collect #MON"],
      ["cont", "if they were"],
      ["cont", "unattractive."]
    ],
    _CeladonGymRainbowBadgeInfoText: [
      ["text", "The RAINBOWBADGE"],
      ["line", "will make #MON"],
      ["cont", "up to L50 obey."],
      ["para", "It also allows"],
      ["line", "#MON to use"],
      ["cont", "STRENGTH in and"],
      ["cont", "out of battle."],
      ["para", "Please also take"],
      ["line", "this with you."]
    ],
    _CeladonGymReceivedTM21Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _TM21ExplanationText: [
      ["text_start"],
      ["para", "TM21 contains"],
      ["line", "MEGA DRAIN."],
      ["para", "Half the damage"],
      ["line", "it inflicts is"],
      ["cont", "drained to heal"],
      ["cont", "your #MON!"]
    ],
    _CeladonGymTM21NoRoomText: [
      ["text", "You should make"],
      ["line", "room for this."]
    ],
    _CeladonGymBattleText2: [
      ["text", "Hey!"],
      ["para", "You are not"],
      ["line", "allowed in here!"]
    ],
    _CeladonGymEndBattleText2: [
      ["text", "You're"],
      ["line", "too rough!"],
      ["prompt"]
    ],
    _CeladonGymAfterBattleText2: [
      ["text", "Bleaah!"],
      ["line", "I hope ERIKA"],
      ["cont", "wipes you out!"]
    ],
    _CeladonGymBattleText3: [
      ["text", "I was getting"],
      ["line", "bored."]
    ],
    _CeladonGymEndBattleText3: [
      ["text", "My"],
      ["line", "makeup!"],
      ["prompt"]
    ],
    _CeladonGymAfterBattleText3: [
      ["text", "Grass-type #MON"],
      ["line", "are tough against"],
      ["cont", "the water-type!"],
      ["para", "They also have an"],
      ["line", "edge on rock and"],
      ["cont", "ground #MON!"]
    ],
    _CeladonGymBattleText4: [
      ["text", "Aren't you the"],
      ["line", "peeping Tom?"]
    ],
    _CeladonGymEndBattleText4: [
      ["text", "I'm"],
      ["line", "in shock!"],
      ["prompt"]
    ],
    _CeladonGymAfterBattleText4: [
      ["text", "Oh, you weren't"],
      ["line", "peeping? We get a"],
      ["cont", "lot of gawkers!"]
    ],
    _CeladonGymBattleText5: [
      ["text", "Look at my grass"],
      ["line", "#MON!"],
      ["para", "They're so easy"],
      ["line", "to raise!"]
    ],
    _CeladonGymEndBattleText5: [["text", "No!"], ["prompt"]],
    _CeladonGymAfterBattleText5: [
      ["text", "We only use grass-"],
      ["line", "type #MON at"],
      ["cont", "our GYM!"],
      ["para", "We also use them"],
      ["line", "for making flower"],
      ["cont", "arrangements!"]
    ],
    _CeladonGymBattleText6: [
      ["text", "Don't bring any"],
      ["line", "bugs or fire"],
      ["cont", "#MON in here!"]
    ],
    _CeladonGymEndBattleText6: [["text", "Oh!"], ["line", "You!"], ["prompt"]],
    _CeladonGymAfterBattleText6: [
      ["text", "Our LEADER, ERIKA,"],
      ["line", "might be quiet,"],
      ["cont", "but she's also"],
      ["cont", "very skilled!"]
    ],
    _CeladonGymBattleText7: [
      ["text", "Pleased to meet"],
      ["line", "you. My hobby is"],
      ["cont", "#MON training."]
    ],
    _CeladonGymEndBattleText7: [
      ["text", "Oh!"],
      ["line", "Splendid!"],
      ["prompt"]
    ],
    _CeladonGymAfterBattleText7: [
      ["text", "I have a blind"],
      ["line", "date coming up."],
      ["cont", "I have to learn"],
      ["cont", "to be polite."]
    ],
    _CeladonGymBattleText8: [
      ["text", "Welcome to"],
      ["line", "CELADON GYM!"],
      ["para", "You better not"],
      ["line", "underestimate"],
      ["cont", "girl power!"]
    ],
    _CeladonGymEndBattleText8: [
      ["text", "Oh!"],
      ["line", "Beaten!"],
      ["prompt"]
    ],
    _CeladonGymAfterBattleText8: [
      ["text", "I didn't bring my"],
      ["line", "best #MON!"],
      ["para", "Wait 'til next"],
      ["line", "time!"]
    ]
  }
};
