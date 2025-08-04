import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_6_BLOCKS } from "../data/blocks/Route6";
import { OverworldSprite } from "../sprite";

export const Route6: Map = {
  width: 10,
  height: 18,
  borderBlock: 15,
  blocks: ROUTE_6_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.SaffronCity, xOffset: -5 },
    south: { map: MapName.VermilionCity, xOffset: -5 }
  },
  objects: {
    warps: [
      { x: 9, y: 1, toMap: MapName.Route6Gate, warpIndex: 2 },
      { x: 10, y: 1, toMap: MapName.Route6Gate, warpIndex: 2 },
      { x: 10, y: 7, toMap: MapName.Route6Gate, warpIndex: 0 },
      { x: 17, y: 13, toMap: MapName.UndergroundPathRoute6, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 19, y: 15, signId: "TEXT_ROUTE6_UNDERGROUND_PATH_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 10,
        y: 21,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_COOLTRAINER_M1",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 11,
        y: 21,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 0,
        y: 15,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_YOUNGSTER1",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 11,
        y: 31,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_COOLTRAINER_M2",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 11,
        y: 30,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 19,
        y: 26,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE6_YOUNGSTER2",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 11
      }
    ]
  },
  text: {
    _Route6CooltrainerM1BattleText: [
      ["text", "Who's there?"],
      ["line", "Quit listening in"],
      ["cont", "on us!"]
    ],
    _Route6CooltrainerM1EndBattleText: [
      ["text", "I"],
      ["line", "just can't win!"],
      ["prompt"]
    ],
    _Route6CooltrainerAfterBattleText: [
      ["text", "Whisper..."],
      ["line", "whisper..."]
    ],
    _Route6CooltrainerF1BattleText: [
      ["text", "Excuse me! This"],
      ["line", "is a private"],
      ["cont", "conversation!"]
    ],
    _Route6CooltrainerF1EndBattleText: [
      ["text", "Ugh!"],
      ["line", "I hate losing!"],
      ["prompt"]
    ],
    _Route6Youngster1BattleText: [
      ["text", "There aren't many"],
      ["line", "bugs out here."]
    ],
    _Route6Youngster1EndBattleText: [
      ["text", "No!"],
      ["line", "You're kidding!"],
      ["prompt"]
    ],
    _Route6Youngster1AfterBattleText: [
      ["text", "I like bugs, so"],
      ["line", "I'm going back to"],
      ["cont", "VIRIDIAN FOREST."]
    ],
    _Route6CooltrainerM2BattleText: [
      ["text", "Huh? You want"],
      ["line", "to talk to me?"]
    ],
    _Route6CooltrainerM2EndBattleText: [
      ["text", "I"],
      ["line", "didn't start it!"],
      ["prompt"]
    ],
    _Route6CooltrainerM2AfterBattleText: [
      ["text", "I should carry"],
      ["line", "more #MON with"],
      ["cont", "me for safety."]
    ],
    _Route6CooltrainerF2BattleText: [
      ["text", "Me? Well, OK."],
      ["line", "I'll play!"]
    ],
    _Route6CooltrainerF2EndBattleText: [
      ["text", "Just"],
      ["line", "didn't work!"],
      ["prompt"]
    ],
    _Route6CooltrainerF2AfterBattleText: [
      ["text", "I want to get"],
      ["line", "stronger! What's"],
      ["cont", "your secret?"]
    ],
    _Route6Youngster2BattleText: [
      ["text", "I've never seen"],
      ["line", "you around!"],
      ["cont", "Are you good?"]
    ],
    _Route6Youngster2EndBattleText: [
      ["text", "You"],
      ["line", "are too good!"],
      ["prompt"]
    ],
    _Route6Youngster2AfterBattleText: [
      ["text", "Are my #MON"],
      ["line", "weak? Or, am I"],
      ["cont", "just bad?"]
    ],
    _Route6UndergroundPathSignText: [
      ["text", "UNDERGROUND PATH"],
      ["line", "CERULEAN CITY -"],
      ["cont", "VERMILION CITY"]
    ]
  }
};
