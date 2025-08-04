import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_15_BLOCKS } from "../data/blocks/Route15";
import { OverworldSprite } from "../sprite";

export const Route15: Map = {
  width: 30,
  height: 9,
  borderBlock: 67,
  blocks: ROUTE_15_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.FuchsiaCity, yOffset: -4 },
    east: { map: MapName.Route14, yOffset: -18 }
  },
  objects: {
    warps: [
      { x: 7, y: 8, toMap: MapName.Route15Gate1F, warpIndex: 0 },
      { x: 7, y: 9, toMap: MapName.Route15Gate1F, warpIndex: 1 },
      { x: 14, y: 8, toMap: MapName.Route15Gate1F, warpIndex: 2 },
      { x: 14, y: 9, toMap: MapName.Route15Gate1F, warpIndex: 3 }
    ],
    backgroundItems: [{ x: 39, y: 9, signId: "TEXT_ROUTE15_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 41,
        y: 11,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 20
      },
      {
        type: "trainer",
        x: 53,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 21
      },
      {
        type: "trainer",
        x: 31,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_M1",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 35,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_M2",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 53,
        y: 11,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE15_BEAUTY1",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 41,
        y: 10,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE15_BEAUTY2",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 48,
        y: 10,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE15_BIKER1",
        trainerId: "OPP_BIKER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 46,
        y: 10,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE15_BIKER2",
        trainerId: "OPP_BIKER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 37,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_F3",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 22
      },
      {
        type: "trainer",
        x: 18,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE15_COOLTRAINER_F4",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 23
      },
      {
        type: "item",
        x: 18,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE15_TM_RAGE",
        itemId: "TM_RAGE"
      }
    ]
  },
  text: {
    _Route15CooltrainerF1BattleText: [
      ["text", "Let me try out the"],
      ["line", "#MON I just"],
      ["cont", "got in a trade!"]
    ],
    _Route15CooltrainerF1EndBattleText: [
      ["text", "Not"],
      ["line", "good enough!"],
      ["prompt"]
    ],
    _Route15CooltrainerF1AfterBattleText: [
      ["text", "You can't change"],
      ["line", "the nickname of"],
      ["cont", "any #MON you"],
      ["cont", "get in a trade."],
      ["para", "Only the Original"],
      ["line", "Trainer can."]
    ],
    _Route15CooltrainerF2BattleText: [
      ["text", "You look gentle,"],
      ["line", "so I think I can"],
      ["cont", "beat you!"]
    ],
    _Route15CooltrainerF2EndBattleText: [
      ["text", "No,"],
      ["line", "wrong!"],
      ["prompt"]
    ],
    _Route15CooltrainerF2AfterBattleText: [
      ["text", "I'm afraid of"],
      ["line", "BIKERs, they look"],
      ["cont", "so ugly and mean!"]
    ],
    _Route15CooltrainerM1BattleText: [
      ["text", "When I whistle, I"],
      ["line", "can summon bird"],
      ["cont", "#MON!"]
    ],
    _Route15CooltrainerM1EndBattleText: [
      ["text", "Ow!"],
      ["line", "That's tragic!"],
      ["prompt"]
    ],
    _Route15CooltrainerM1AfterBattleText: [
      ["text", "Maybe I'm not cut"],
      ["line", "out for battles."]
    ],
    _Route15CooltrainerM2BattleText: [
      ["text", "Hmm? My birds are"],
      ["line", "shivering! You're"],
      ["cont", "good, aren't you?"]
    ],
    _Route15CooltrainerM2EndBattleText: [
      ["text", "Just"],
      ["line", "as I thought!"],
      ["prompt"]
    ],
    _Route15CooltrainerM2AfterBattleText: [
      ["text", "Did you know moves"],
      ["line", "like EARTHQUAKE"],
      ["cont", "don't have any"],
      ["cont", "effect on birds?"]
    ],
    _Route15Beauty1BattleText: [
      ["text", "Oh, you're a"],
      ["line", "little cutie!"]
    ],
    _Route15Beauty1EndBattleText: [
      ["text", "You looked"],
      ["line", "so cute too!"],
      ["prompt"]
    ],
    _Route15Beauty1AfterBattleText: [
      ["text", "I forgive you!"],
      ["line", "I can take it!"]
    ],
    _Route15Beauty2BattleText: [
      ["text", "I raise #MON"],
      ["line", "because I live"],
      ["cont", "alone!"]
    ],
    _Route15Beauty2EndBattleText: [
      ["text", "I didn't"],
      ["line", "ask for this!"],
      ["prompt"]
    ],
    _Route15Beauty2AfterBattleText: [
      ["text", "I just like going"],
      ["line", "home to be with"],
      ["cont", "my #MON!"]
    ],
    _Route15Biker1BattleText: [
      ["text", "Hey kid! C'mon!"],
      ["line", "I just got these!"]
    ],
    _Route15Biker1EndBattleText: [
      ["text", "Why"],
      ["line", "not?"],
      ["prompt"]
    ],
    _Route15Biker1AfterBattleText: [
      ["text", "You only live"],
      ["line", "once, so I live"],
      ["cont", "as an outlaw!"],
      ["cont", "TEAM ROCKET RULES!"]
    ],
    _Route15Biker2BattleText: [
      ["text", "Fork over all your"],
      ["line", "cash when you"],
      ["cont", "lose to me, kid!"]
    ],
    _Route15Biker2EndBattleText: [
      ["text", "That"],
      ["line", "can't be true!"],
      ["prompt"]
    ],
    _Route15Biker2AfterBattleText: [
      ["text", "I was just joking"],
      ["line", "about the money!"]
    ],
    _Route15CooltrainerF3BattleText: [
      ["text", "What's cool?"],
      ["line", "Trading #MON!"]
    ],
    _Route15CooltrainerF3EndBattleText: [
      ["text", "I"],
      ["line", "said trade!"],
      ["prompt"]
    ],
    _Route15CooltrainerF3AfterBattleText: [
      ["text", "I trade #MON"],
      ["line", "with my friends!"]
    ],
    _Route15CooltrainerF4BattleText: [
      ["text", "Want to play with"],
      ["line", "my #MON?"]
    ],
    _Route15CooltrainerF4EndBattleText: [
      ["text", "I was"],
      ["line", "too impatient!"],
      ["prompt"]
    ],
    _Route15CooltrainerF4AfterBattleText: [
      ["text", "I'll go train with"],
      ["line", "weaker people.@"],
      ["text_end"]
    ],
    _Route15SignText: [
      ["text", "ROUTE 15"],
      ["line", "West to FUCHSIA"],
      ["cont", "CITY"]
    ]
  }
};
