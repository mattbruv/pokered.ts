import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_14_BLOCKS } from "../data/blocks/Route14";
import { OverworldSprite } from "../sprite";

export const Route14: Map = {
  width: 10,
  height: 27,
  borderBlock: 67,
  blocks: ROUTE_14_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.Route15, yOffset: 18 },
    east: { map: MapName.Route13, yOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 17, y: 13, signId: "TEXT_ROUTE14_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M1",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 15,
        y: 6,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M2",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 12,
        y: 11,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M3",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 16
      },
      {
        type: "trainer",
        x: 14,
        y: 15,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M4",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 17
      },
      {
        type: "trainer",
        x: 15,
        y: 31,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M5",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 6,
        y: 49,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE14_COOLTRAINER_M6",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 5,
        y: 39,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE14_BIKER1",
        trainerId: "OPP_BIKER",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 4,
        y: 30,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE14_BIKER2",
        trainerId: "OPP_BIKER",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 15,
        y: 30,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE14_BIKER3",
        trainerId: "OPP_BIKER",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 4,
        y: 31,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE14_BIKER4",
        trainerId: "OPP_BIKER",
        trainerLevel: 2
      }
    ]
  },
  text: {
    _Route14CooltrainerM1BattleText: [
      ["text", "You need to use"],
      ["line", "TMs to teach good"],
      ["cont", "moves to #MON!"]
    ],
    _Route14CooltrainerM1EndBattleText: [
      ["text", "Not"],
      ["line", "good enough!"],
      ["prompt"]
    ],
    _Route14CooltrainerM1AfterBattleText: [
      ["text", "You have some HMs"],
      ["line", "right? #MON"],
      ["cont", "can't ever forget"],
      ["cont", "those moves."]
    ],
    _Route14CooltrainerM2BattleText: [
      ["text", "My bird #MON"],
      ["line", "should be ready"],
      ["cont", "for battle."]
    ],
    _Route14CooltrainerM2EndBattleText: [
      ["text", "Not"],
      ["line", "ready yet!"],
      ["prompt"]
    ],
    _Route14CooltrainerM2AfterBattleText: [
      ["text", "They need to learn"],
      ["line", "better moves."]
    ],
    _Route14CooltrainerM3BattleText: [
      ["text", "TMs are on sale"],
      ["line", "in CELADON!"],
      ["cont", "But, only a few"],
      ["cont", "people have HMs!"]
    ],
    _Route14CooltrainerM3EndBattleText: [
      ["text", "Aww,"],
      ["line", "bummer!"],
      ["prompt"]
    ],
    _Route14CooltrainerM3AfterBattleText: [
      ["text", "Teach #MON"],
      ["line", "moves of the same"],
      ["cont", "element type for"],
      ["cont", "more power."]
    ],
    _Route14CooltrainerM4BattleText: [
      ["text", "Have you taught"],
      ["line", "your bird #MON"],
      ["cont", "how to FLY?"]
    ],
    _Route14CooltrainerM4EndBattleText: [
      ["text", "Shot"],
      ["line", "down in flames!"],
      ["prompt"]
    ],
    _Route14CooltrainerM4AfterBattleText: [
      ["text", "Bird #MON are"],
      ["line", "my true love!"]
    ],
    _Route14CooltrainerM5BattleText: [
      ["text", "Have you heard of"],
      ["line", "the legendary"],
      ["cont", "#MON?"]
    ],
    _Route14CooltrainerM5EndBattleText: [
      ["text", "Why?"],
      ["line", "Why'd I lose?"],
      ["prompt"]
    ],
    _Route14CooltrainerM5AfterBattleText: [
      ["text", "The 3 legendary"],
      ["line", "#MON are all"],
      ["cont", "birds of prey."]
    ],
    _Route14CooltrainerM6BattleText: [
      ["text", "I'm not into it,"],
      ["line", "but OK! Let's go!"]
    ],
    _Route14CooltrainerM6EndBattleText: [
      ["text", "I"],
      ["line", "knew it!"],
      ["prompt"]
    ],
    _Route14CooltrainerM6AfterBattleText: [
      ["text", "Winning, losing,"],
      ["line", "it doesn't matter"],
      ["cont", "in the long run!"]
    ],
    _Route14Biker1BattleText: [
      ["text", "C'mon, c'mon."],
      ["line", "Let's go, let's"],
      ["cont", "go, let's go!"]
    ],
    _Route14Biker1EndBattleText: [
      ["text", "Arrg!"],
      ["line", "Lost! Get lost!"],
      ["prompt"]
    ],
    _Route14Biker1AfterBattleText: [
      ["text", "What, what, what?"],
      ["line", "What do you want?"]
    ],
    _Route14Biker2BattleText: [
      ["text", "Perfect! I need to"],
      ["line", "burn some time!"]
    ],
    _Route14Biker2EndBattleText: [
      ["text", "What?"],
      ["line", "You!?"],
      ["prompt"]
    ],
    _Route14Biker2AfterBattleText: [
      ["text", "Raising #MON"],
      ["line", "is a drag, man."]
    ],
    _Route14Biker3BattleText: [
      ["text", "We ride out here"],
      ["line", "because there's"],
      ["cont", "more room!"]
    ],
    _Route14Biker3EndBattleText: [["text", "Wipe out!"], ["prompt"]],
    _Route14Biker3AfterBattleText: [
      ["text", "It's cool you"],
      ["line", "made your #MON"],
      ["cont", "so strong!"],
      ["para", "Might is right!"],
      ["line", "And you know it!"]
    ],
    _Route14Biker4BattleText: [
      ["text", "#MON fight?"],
      ["line", "Cool! Rumble!"]
    ],
    _Route14Biker4EndBattleText: [
      ["text", "Blown"],
      ["line", "away!"],
      ["prompt"]
    ],
    _Route14Biker4AfterBattleText: [
      ["text", "You know who'd"],
      ["line", "win, you and me"],
      ["cont", "one on one!"]
    ],
    _Route14SignText: [
      ["text", "ROUTE 14"],
      ["line", "West to FUCHSIA"],
      ["cont", "CITY"]
    ]
  }
};
