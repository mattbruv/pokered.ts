import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_GYM_BLOCKS } from "../data/blocks/ViridianGym";
import { OverworldSprite } from "../sprite";

export const ViridianGym: Map = {
  width: 10,
  height: 9,
  borderBlock: 3,
  blocks: VIRIDIAN_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 16, y: 17, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 17, y: 17, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 2,
        y: 1,
        sprite: OverworldSprite.SPRITE_GIOVANNI,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_GIOVANNI",
        trainerId: "OPP_GIOVANNI",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 12,
        y: 7,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_COOLTRAINER_M1",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 11,
        y: 11,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_HIKER1",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 10,
        y: 7,
        sprite: OverworldSprite.SPRITE_ROCKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_ROCKER1",
        trainerId: "OPP_TAMER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 3,
        y: 7,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_HIKER2",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 13,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_COOLTRAINER_M2",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 10,
        y: 1,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_HIKER3",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 2,
        y: 16,
        sprite: OverworldSprite.SPRITE_ROCKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_ROCKER2",
        trainerId: "OPP_TAMER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 6,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_COOLTRAINER_M3",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 1
      },
      {
        type: "sprite",
        x: 16,
        y: 15,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_GYM_GUIDE"
      },
      {
        type: "item",
        x: 16,
        y: 9,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VIRIDIANGYM_REVIVE",
        itemId: "REVIVE"
      }
    ]
  },
  text: {
    _ViridianGymGiovanniPreBattleText: [
      ["text", "Fwahahaha! This is"],
      ["line", "my hideout!"],
      ["para", "I planned to"],
      ["line", "resurrect TEAM"],
      ["cont", "ROCKET here!"],
      ["para", "But, you have"],
      ["line", "caught me again!"],
      ["cont", "So be it! This"],
      ["cont", "time, I'm not"],
      ["cont", "holding back!"],
      ["para", "Once more, you"],
      ["line", "shall face"],
      ["cont", "GIOVANNI, the"],
      ["cont", "greatest trainer!"]
    ],
    _ViridianGymGiovanniReceivedEarthBadgeText: [
      ["text", "Ha!"],
      ["line", "That was a truly"],
      ["cont", "intense fight!"],
      ["cont", "You have won!"],
      ["cont", "As proof, here is"],
      ["cont", "the EARTHBADGE!@"],
      ["text_end"]
    ],
    _ViridianGymGiovanniPostBattleAdviceText: [
      ["text", "Having lost, I"],
      ["line", "cannot face my"],
      ["cont", "underlings!"],
      ["cont", "TEAM ROCKET is"],
      ["cont", "finished forever!"],
      ["para", "I will dedicate my"],
      ["line", "life to the study"],
      ["cont", "of #MON!"],
      ["para", "Let us meet again"],
      ["line", "some day!"],
      ["cont", "Farewell!@"],
      ["text_end"]
    ],
    _ViridianGymGiovanniEarthBadgeInfoText: [
      ["text", "The EARTHBADGE"],
      ["line", "makes #MON of"],
      ["cont", "any level obey!"],
      ["para", "It is evidence of"],
      ["line", "your mastery as a"],
      ["cont", "#MON trainer!"],
      ["para", "With it, you can"],
      ["line", "enter the #MON"],
      ["cont", "LEAGUE!"],
      ["para", "It is my gift for"],
      ["line", "your #MON"],
      ["cont", "LEAGUE challenge!"]
    ],
    _ViridianGymGiovanniReceivedTM27Text: [
      ["text", "<PLAYER> received"],
      ["line", "TM27!@"],
      ["text_end"]
    ],
    _ViridianGymGiovanniTM27ExplanationText: [
      ["text_start"],
      ["para", "TM27 is FISSURE!"],
      ["line", "It will take out"],
      ["cont", "#MON with just"],
      ["cont", "one hit!"],
      ["para", "I made it when I"],
      ["line", "ran the GYM here,"],
      ["cont", "too long ago..."]
    ],
    _ViridianGymGiovanniTM27NoRoomText: [
      ["text", "You do not have"],
      ["line", "space for this!"]
    ],
    _ViridianGymCooltrainerM1BattleText: [
      ["text", "Heh! You must be"],
      ["line", "running out of"],
      ["cont", "steam by now!"]
    ],
    _ViridianGymCooltrainerM1EndBattleText: [
      ["text", "I"],
      ["line", "ran out of gas!"],
      ["prompt"]
    ],
    _ViridianGymCooltrainerM1AfterBattleText: [
      ["text", "You need power to"],
      ["line", "keep up with our"],
      ["cont", "GYM LEADER!"]
    ],
    _ViridianGymHiker1BattleText: [
      ["text", "Rrrroar! I'm"],
      ["line", "working myself"],
      ["cont", "into a rage!"]
    ],
    _ViridianGymHiker1EndBattleText: [["text", "Wargh!"], ["prompt"]],
    _ViridianGymHiker1AfterBattleText: [
      ["text", "I'm still not"],
      ["line", "worthy!"]
    ],
    _ViridianGymRocker1BattleText: [
      ["text", "#MON and I, we"],
      ["line", "make wonderful"],
      ["cont", "music together!"]
    ],
    _ViridianGymRocker1EndBattleText: [
      ["text", "You are in"],
      ["line", "perfect harmony!"],
      ["prompt"]
    ],
    _ViridianGymRocker1AfterBattleText: [
      ["text", "Do you know the"],
      ["line", "identity of our"],
      ["cont", "GYM LEADER?"]
    ],
    _ViridianGymHiker2BattleText: [
      ["text", "Karate is the"],
      ["line", "ultimate form of"],
      ["cont", "martial arts!"]
    ],
    _ViridianGymHiker2EndBattleText: [["text", "Atcho!"], ["prompt"]],
    _ViridianGymHiker2AfterBattleText: [
      ["text", "If my #MON"],
      ["line", "were as good at"],
      ["cont", "Karate as I..."]
    ],
    _ViridianGymCooltrainerM2BattleText: [
      ["text", "The truly talented"],
      ["line", "win with style!"]
    ],
    _ViridianGymCooltrainerM2EndBattleText: [
      ["text", "I"],
      ["line", "lost my grip!"],
      ["prompt"]
    ],
    _ViridianGymCooltrainerM2AfterBattleText: [
      ["text", "The LEADER will"],
      ["line", "scold me!"]
    ],
    _ViridianGymHiker3BattleText: [
      ["text", "I'm the KARATE"],
      ["line", "KING! Your fate"],
      ["cont", "rests with me!"]
    ],
    _ViridianGymHiker3EndBattleText: [["text", "Ayah!"], ["prompt"]],
    _ViridianGymHiker3AfterBattleText: [
      ["text", "#MON LEAGUE?"],
      ["line", "You? Don't get"],
      ["cont", "cocky!"]
    ],
    _ViridianGymRocker2BattleText: [
      ["text", "Your #MON will"],
      ["line", "cower at the"],
      ["cont", "crack of my whip!"]
    ],
    _ViridianGymRocker2EndBattleText: [
      ["text", "Yowch!"],
      ["line", "Whiplash!"],
      ["prompt"]
    ],
    _ViridianGymRocker2AfterBattleText: [
      ["text", "Wait! I was just"],
      ["line", "careless!"]
    ],
    _ViridianGymCooltrainerM3BattleText: [
      ["text", "VIRIDIAN GYM was"],
      ["line", "closed for a long"],
      ["cont", "time, but now our"],
      ["cont", "LEADER is back!"]
    ],
    _ViridianGymCooltrainerM3EndBattleText: [
      ["text", "I"],
      ["line", "was beaten?"],
      ["prompt"]
    ],
    _ViridianGymCooltrainerM3AfterBattleText: [
      ["text", "You can go onto"],
      ["line", "#MON LEAGUE"],
      ["cont", "only by defeating"],
      ["cont", "our GYM LEADER!"]
    ],
    _ViridianGymGuidePreBattleText: [
      ["text", "Yo! Champ in"],
      ["line", "making!"],
      ["para", "Even I don't know"],
      ["line", "VIRIDIAN LEADER's"],
      ["cont", "identity!"],
      ["para", "This will be the"],
      ["line", "toughest of all"],
      ["cont", "the GYM LEADERs!"],
      ["para", "I heard that the"],
      ["line", "trainers here"],
      ["cont", "like ground-type"],
      ["cont", "#MON!"]
    ],
    _ViridianGymGuidePostBattleText: [
      ["text", "Blow me away!"],
      ["line", "GIOVANNI was the"],
      ["cont", "GYM LEADER here?"]
    ]
  }
};
