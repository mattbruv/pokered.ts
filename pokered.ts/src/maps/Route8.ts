import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_8_BLOCKS } from "../data/blocks/Route8";
import { OverworldSprite } from "../sprite";

export const Route8: Map = {
  width: 30,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_8_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.SaffronCity, yOffset: -4 },
    east: { map: MapName.LavenderTown, yOffset: 0 }
  },
  objects: {
    warps: [
      { x: 1, y: 9, toMap: MapName.Route8Gate, warpIndex: 0 },
      { x: 1, y: 10, toMap: MapName.Route8Gate, warpIndex: 1 },
      { x: 8, y: 9, toMap: MapName.Route8Gate, warpIndex: 2 },
      { x: 8, y: 10, toMap: MapName.Route8Gate, warpIndex: 3 },
      { x: 13, y: 3, toMap: MapName.UndergroundPathRoute8, warpIndex: 0 }
    ],
    backgroundItems: [{ x: 17, y: 3, signId: "TEXT_ROUTE8_UNDERGROUND_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 8,
        y: 5,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE8_SUPER_NERD1",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 13,
        y: 9,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE8_GAMBLER1",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 42,
        y: 6,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE8_SUPER_NERD2",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 26,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE8_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 26,
        y: 4,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE8_SUPER_NERD3",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 26,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE8_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 26,
        y: 6,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE8_COOLTRAINER_F3",
        trainerId: "OPP_LASS",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 46,
        y: 13,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE8_GAMBLER2",
        trainerId: "OPP_GAMBLER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 51,
        y: 12,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE8_COOLTRAINER_F4",
        trainerId: "OPP_LASS",
        trainerLevel: 16
      }
    ]
  },
  text: {
    _Route8SuperNerd1BattleText: [
      ["text", "You look good at"],
      ["line", "#MON, but"],
      ["cont", "how's your chem?"]
    ],
    _Route8SuperNerd1EndBattleText: [
      ["text", "Ow!"],
      ["line", "Meltdown!"],
      ["prompt"]
    ],
    _Route8SuperNerd1AfterBattleText: [
      ["text", "I am better at"],
      ["line", "school than this!"]
    ],
    _Route8Gambler1BattleText: [
      ["text", "All right! Let's"],
      ["line", "roll the dice!"]
    ],
    _Route8Gambler1EndBattleText: [
      ["text", "Drat!"],
      ["line", "Came up short!"],
      ["prompt"]
    ],
    _Route8Gambler1AfterBattleText: [
      ["text", "Lady Luck's not"],
      ["line", "with me today!"]
    ],
    _Route8SuperNerd2BattleText: [
      ["text", "You need strategy"],
      ["line", "to win at this!"]
    ],
    _Route8SuperNerd2EndBattleText: [
      ["text", "It's"],
      ["line", "not logical!"],
      ["prompt"]
    ],
    _Route8SuperNerd2AfterBattleText: [
      ["text", "Go with GRIMER"],
      ["line", "first...and..."],
      ["cont", "...and...then..."]
    ],
    _Route8CooltrainerF1BattleText: [
      ["text", "I like NIDORAN, so"],
      ["line", "I collect them!"]
    ],
    _Route8CooltrainerF1EndBattleText: [["text", "Why? Why??"], ["prompt"]],
    _Route8CooltrainerF1AfterBattleText: [
      ["text", "When #MON grow"],
      ["line", "up they get ugly!"],
      ["cont", "They shouldn't"],
      ["cont", "evolve!"]
    ],
    _Route8SuperNerd3BattleText: [
      ["text", "School is fun, but"],
      ["line", "so are #MON."]
    ],
    _Route8SuperNerd3EndBattleText: [
      ["text", "I'll"],
      ["line", "stay with school."],
      ["prompt"]
    ],
    _Route8SuperNerd3AfterBattleText: [
      ["text", "We're stuck here"],
      ["line", "because of the"],
      ["cont", "gates at SAFFRON."]
    ],
    _Route8CooltrainerF2BattleText: [
      ["text", "MEOWTH is so cute,"],
      ["line", "meow, meow, meow!"]
    ],
    _Route8CooltrainerF2EndBattleText: [["text", "Meow!"], ["prompt"]],
    _Route8CooltrainerF2AfterBattleText: [
      ["text", "I think PIDGEY"],
      ["line", "and RATTATA"],
      ["cont", "are cute too!"]
    ],
    _Route8CooltrainerF3BattleText: [
      ["text", "We must look"],
      ["line", "silly standing"],
      ["cont", "here like this!"]
    ],
    _Route8CooltrainerF3EndBattleText: [
      ["text", "Look what"],
      ["line", "you did!"],
      ["prompt"]
    ],
    _Route8CooltrainerF3AfterBattleText: [
      ["text", "SAFFRON's gate"],
      ["line", "keeper won't let"],
      ["cont", "us through."],
      ["cont", "He's so mean!"]
    ],
    _Route8Gambler2BattleText: [
      ["text", "I'm a rambling,"],
      ["line", "gambling dude!"]
    ],
    _Route8Gambler2EndBattleText: [
      ["text", "Missed"],
      ["line", "the big score!"],
      ["prompt"]
    ],
    _Route8Gambler2AfterBattleText: [
      ["text", "Gambling and"],
      ["line", "#MON are like"],
      ["cont", "eating peanuts!"],
      ["cont", "Just can't stop!"]
    ],
    _Route8CooltrainerF4BattleText: [
      ["text", "What's a cute,"],
      ["line", "round and fluffy"],
      ["cont", "#MON?"]
    ],
    _Route8CooltrainerF4EndBattleText: [
      ["text", "Stop!"],
      ["para", "Don't be so mean"],
      ["line", "to my CLEFAIRY!"],
      ["prompt"]
    ],
    _Route8CooltrainerF4AfterBattleText: [
      ["text", "I heard that"],
      ["line", "CLEFAIRY evolves"],
      ["cont", "when it's exposed"],
      ["cont", "to a MOON STONE."]
    ],
    _Route8UndergroundSignText: [
      ["text", "UNDERGROUND PATH"],
      ["line", "CELADON CITY -"],
      ["cont", "LAVENDER TOWN"]
    ]
  }
};
