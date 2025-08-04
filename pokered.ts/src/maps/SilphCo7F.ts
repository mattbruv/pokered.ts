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
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_SILPH_WORKER_M1"
      },
      {
        type: "sprite",
        x: 13,
        y: 13,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_SILPH_WORKER_M2"
      },
      {
        type: "sprite",
        x: 7,
        y: 10,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_SILPH_WORKER_M3"
      },
      {
        type: "sprite",
        x: 10,
        y: 8,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_SILPH_WORKER_M4"
      },
      {
        type: "trainer",
        x: 13,
        y: 1,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "DOWN",
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
        direction: "DOWN",
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
        direction: "LEFT",
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
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_ROCKET3",
        trainerId: "OPP_ROCKET",
        trainerLevel: 34
      },
      {
        type: "sprite",
        x: 3,
        y: 7,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_BLUE,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_RIVAL"
      },
      {
        type: "item",
        x: 1,
        y: 9,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_CALCIUM",
        itemId: "CALCIUM"
      },
      {
        type: "item",
        x: 24,
        y: 11,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SILPHCO7F_TM_SWORDS_DANCE",
        itemId: "TM_SWORDS_DANCE"
      }
    ]
  },
  text: {
    _SilphCo7FSilphWorkerM1HaveThisPokemonText: [
      ["text", "Oh! Hi! You're"],
      ["line", "not a ROCKET! You"],
      ["cont", "came to save us?"],
      ["cont", "Why, thank you!"],
      ["para", "I want you to"],
      ["line", "have this #MON"],
      ["cont", "for saving us."],
      ["prompt"]
    ],
    _SilphCo7FSilphWorkerM1LaprasDescriptionText: [
      ["text", "It's LAPRAS. It's"],
      ["line", "very intelligent."],
      ["para", "We kept it in our"],
      ["line", "lab, but it will"],
      ["cont", "be much better"],
      ["cont", "off with you!"],
      ["para", "I think you will"],
      ["line", "be a good trainer"],
      ["cont", "for LAPRAS!"],
      ["para", "It's a good"],
      ["line", "swimmer. It'll"],
      ["cont", "give you a lift!"]
    ],
    _SilphCo7FSilphWorkerM1IsOurPresidentOkText: [
      ["text", "TEAM ROCKET's"],
      ["line", "BOSS went to the"],
      ["cont", "boardroom! Is our"],
      ["cont", "PRESIDENT OK?"]
    ],
    _SilphCo7FSilphWorkerM1SavedText: [
      ["text", "Saved at last!"],
      ["line", "Thank you!"]
    ],
    _SilphCo7FSilphWorkerM2AfterTheMasterBallText: [
      ["text", "TEAM ROCKET was"],
      ["line", "after the MASTER"],
      ["cont", "BALL which will"],
      ["cont", "catch any #MON!"]
    ],
    _SilphCo7FSilphWorkerM2CancelledMasterBallText: [
      ["text", "We canceled the"],
      ["line", "MASTER BALL"],
      ["cont", "project because"],
      ["cont", "of TEAM ROCKET."]
    ],
    _SilphCo7FSilphWorkerM3ItWouldBeBadText: [
      ["text", "It would be bad"],
      ["line", "if TEAM ROCKET"],
      ["cont", "took over SILPH"],
      ["cont", "or our #MON!"]
    ],
    _SilphCo7FSilphWorkerM3YouChasedOffTeamRocketText: [
      ["text", "Wow! You chased"],
      ["line", "off TEAM ROCKET"],
      ["cont", "all by yourself?"]
    ],
    _SilphCo7FSilphWorkerM4ItsReallyDangerousHereText: [
      ["text", "You! It's really"],
      ["line", "dangerous here!"],
      ["cont", "You came to save"],
      ["cont", "me? You can't!"]
    ],
    _SilphCo7FSilphWorkerM4SafeAtLastText: [
      ["text", "Safe at last!"],
      ["line", "Oh thank you!"]
    ],
    _SilphCo7FRocket1BattleText: [
      ["text", "Oh ho! I smell a"],
      ["line", "little rat!"]
    ],
    _SilphCo7FRocket1EndBattleText: [
      ["text", "Lights"],
      ["line", "out!"],
      ["prompt"]
    ],
    _SilphCo7FRocket1AfterBattleText: [
      ["text", "You won't find my"],
      ["line", "BOSS by just"],
      ["cont", "scurrying around!"]
    ],
    _SilphCo7FScientistBattleText: [
      ["text", "Heheh!"],
      ["para", "You mistook me for"],
      ["line", "a SILPH worker?"]
    ],
    _SilphCo7FScientistEndBattleText: [
      ["text", "I'm"],
      ["line", "done!"],
      ["prompt"]
    ],
    _SilphCo7FScientistAfterBattleText: [
      ["text", "Despite your age,"],
      ["line", "you are a skilled"],
      ["cont", "trainer!"]
    ],
    _SilphCo7FRocket2BattleText: [
      ["text", "I am one of the 4"],
      ["line", "ROCKET BROTHERS!"]
    ],
    _SilphCo7FRocket2EndBattleText: [
      ["text", "Aack!"],
      ["line", "Brothers, I lost!"],
      ["prompt"]
    ],
    _SilphCo7FRocket2AfterBattleText: [
      ["text", "Doesn't matter."],
      ["line", "My brothers will"],
      ["cont", "repay the favor!"]
    ],
    _SilphCo7FRocket3BattleText: [
      ["text", "A child intruder?"],
      ["line", "That must be you!"]
    ],
    _SilphCo7FRocket3EndBattleText: [
      ["text", "Fine!"],
      ["line", "I lost!"],
      ["prompt"]
    ],
    _SilphCo7FRocket3AfterBattleText: [
      ["text", "Go on home"],
      ["line", "before my BOSS"],
      ["cont", "gets ticked off!"]
    ],
    _SilphCo7FRivalText: [
      ["text", "<RIVAL>: What"],
      ["line", "kept you <PLAYER>?"]
    ],
    _SilphCo7FRivalWaitedHereText: [
      ["text", "<RIVAL>: Hahaha!"],
      ["line", "I thought you'd"],
      ["cont", "turn up if I"],
      ["cont", "waited here!"],
      ["para", "I guess TEAM"],
      ["line", "ROCKET slowed you"],
      ["cont", "down! Not that I"],
      ["cont", "care!"],
      ["para", "I saw you in"],
      ["line", "SAFFRON, so I"],
      ["cont", "decided to see if"],
      ["cont", "you got better!"]
    ],
    _SilphCo7FRivalDefeatedText: [
      ["text", "Oh ho!"],
      ["line", "So, you are ready"],
      ["cont", "for BOSS ROCKET!"],
      ["prompt"]
    ],
    _SilphCo7FRivalVictoryText: [
      ["text", "<RIVAL>: How can"],
      ["line", "I put this?"],
      ["para", "You're not good"],
      ["line", "enough to play"],
      ["cont", "with us big boys!"],
      ["prompt"]
    ],
    _SilphCo7FRivalGoodLuckToYouText: [
      ["text", "Well, <PLAYER>!"],
      ["para", "I'm moving on up"],
      ["line", "and ahead!"],
      ["para", "By checking my"],
      ["line", "#DEX, I'm"],
      ["cont", "starting to see"],
      ["cont", "what's strong and"],
      ["cont", "how they evolve!"],
      ["para", "I'm going to the"],
      ["line", "#MON LEAGUE"],
      ["cont", "to boot out the"],
      ["cont", "ELITE FOUR!"],
      ["para", "I'll become the"],
      ["line", "world's most"],
      ["cont", "powerful trainer!"],
      ["para", "<PLAYER>, well"],
      ["line", "good luck to you!"],
      ["cont", "Don't sweat it!"],
      ["cont", "Smell ya!"]
    ]
  }
};
