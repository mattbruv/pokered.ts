import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_19_BLOCKS } from "../data/blocks/Route19";
import { OverworldSprite } from "../sprite";

export const Route19: Map = {
  width: 10,
  height: 27,
  borderBlock: 67,
  blocks: ROUTE_19_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.FuchsiaCity, xOffset: -5 },
    west: { map: MapName.Route20, yOffset: 18 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 11, y: 9, signId: "TEXT_ROUTE19_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 8,
        y: 7,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE19_COOLTRAINER_M1",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 13,
        y: 7,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE19_COOLTRAINER_M2",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 13,
        y: 25,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER1",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 4,
        y: 27,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER2",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 16,
        y: 31,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER3",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 9,
        y: 11,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER4",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 8,
        y: 43,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER5",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 12
      },
      {
        type: "trainer",
        x: 11,
        y: 43,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER6",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 9,
        y: 42,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER7",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 10,
        y: 44,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE19_SWIMMER8",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 14
      }
    ]
  },
  text: {
    _Route19CooltrainerM1BattleText: [
      ["text", "Have to warm up"],
      ["line", "before my swim!"]
    ],
    _Route19CooltrainerM1EndBattleText: [
      ["text", "All"],
      ["line", "warmed up!"],
      ["prompt"]
    ],
    _Route19CooltrainerM1AfterBattleText: [
      ["text", "Thanks, kid! I'm"],
      ["line", "ready for a swim!"]
    ],
    _Route19CooltrainerM2BattleText: [
      ["text", "Wait! You'll have"],
      ["line", "a heart attack!"]
    ],
    _Route19CooltrainerM2EndBattleText: [
      ["text", "Ooh!"],
      ["line", "That's chilly!"],
      ["prompt"]
    ],
    _Route19CooltrainerM2AfterBattleText: [
      ["text", "Watch out for"],
      ["line", "TENTACOOL!"]
    ],
    _Route19Swimmer1BattleText: [
      ["text", "I love swimming!"],
      ["line", "What about you?"]
    ],
    _Route19Swimmer1EndBattleText: [
      ["text", "Belly"],
      ["line", "flop!"],
      ["prompt"]
    ],
    _Route19Swimmer1AfterBattleText: [
      ["text", "I can beat #MON"],
      ["line", "at swimming!"]
    ],
    _Route19Swimmer2BattleText: [
      ["text", "What's beyond the"],
      ["line", "horizon?"]
    ],
    _Route19Swimmer2EndBattleText: [["text", "Glub!"], ["prompt"]],
    _Route19Swimmer2AfterBattleText: [
      ["text", "I see a couple of"],
      ["line", "islands!"]
    ],
    _Route19Swimmer3BattleText: [
      ["text", "I tried diving"],
      ["line", "for #MON, but"],
      ["cont", "it was a no go!"]
    ],
    _Route19Swimmer3EndBattleText: [["text", "Help!"], ["prompt"]],
    _Route19Swimmer3AfterBattleText: [
      ["text", "You have to fish"],
      ["line", "for sea #MON!"]
    ],
    _Route19Swimmer4BattleText: [
      ["text", "I look at the"],
      ["line", "sea to forget!"]
    ],
    _Route19Swimmer4EndBattleText: [
      ["text", "Ooh!"],
      ["line", "Traumatic!"],
      ["prompt"]
    ],
    _Route19Swimmer4AfterBattleText: [
      ["text", "I'm looking at the"],
      ["line", "sea to forget!"]
    ],
    _Route19Swimmer5BattleText: [
      ["text", "Oh, I just love"],
      ["line", "your ride! Can I"],
      ["cont", "have it if I win?"]
    ],
    _Route19Swimmer5EndBattleText: [
      ["text", "Oh!"],
      ["line", "I lost!"],
      ["prompt"]
    ],
    _Route19Swimmer5AfterBattleText: [
      ["text", "It's still a long"],
      ["line", "way to go to"],
      ["cont", "SEAFOAM ISLANDS."]
    ],
    _Route19Swimmer6BattleText: [
      ["text", "Swimming's great!"],
      ["line", "Sunburns aren't!"]
    ],
    _Route19Swimmer6EndBattleText: [["text", "Shocker!"], ["prompt"]],
    _Route19Swimmer6AfterBattleText: [
      ["text", "My boy friend"],
      ["line", "wanted to swim to"],
      ["cont", "SEAFOAM ISLANDS."]
    ],
    _Route19Swimmer7BattleText: [
      ["text", "These waters are"],
      ["line", "treacherous!"]
    ],
    _Route19Swimmer7EndBattleText: [
      ["text", "Ooh!"],
      ["line", "Dangerous!"],
      ["prompt"]
    ],
    _Route19Swimmer7AfterBattleText: [
      ["text", "I got a cramp!"],
      ["line", "Glub, glub..."]
    ],
    _Route19Swimmer8BattleText: [
      ["text", "I swam here, but"],
      ["line", "I'm tired."]
    ],
    _Route19Swimmer8EndBattleText: [
      ["text", "I'm"],
      ["line", "exhausted..."],
      ["prompt"]
    ],
    _Route19Swimmer8AfterBattleText: [
      ["text", "LAPRAS is so big,"],
      ["line", "it must keep you"],
      ["cont", "dry on water."]
    ],
    _Route19SignText: [
      ["text", "SEA ROUTE 19"],
      ["line", "FUCHSIA CITY -"],
      ["cont", "SEAFOAM ISLANDS"]
    ]
  }
};
