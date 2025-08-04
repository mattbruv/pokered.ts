import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_21_BLOCKS } from "../data/blocks/Route21";
import { OverworldSprite } from "../sprite";

export const Route21: Map = {
  width: 10,
  height: 45,
  borderBlock: 67,
  blocks: ROUTE_21_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.PalletTown, xOffset: 0 },
    south: { map: MapName.CinnabarIsland, xOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 24,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_FISHER1",
        trainerId: "OPP_FISHER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 6,
        y: 25,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE21_FISHER2",
        trainerId: "OPP_FISHER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 10,
        y: 31,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER1",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 12
      },
      {
        type: "trainer",
        x: 12,
        y: 30,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER2",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 16,
        y: 63,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER3",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 5,
        y: 71,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER4",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 15,
        y: 71,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_SWIMMER5",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 14,
        y: 56,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_FISHER3",
        trainerId: "OPP_FISHER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 17,
        y: 57,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE21_FISHER4",
        trainerId: "OPP_FISHER",
        trainerLevel: 10
      }
    ]
  },
  text: {
    _Route21Fisher1BattleText: [
      ["text", "You want to know"],
      ["line", "if the fish are"],
      ["cont", "biting?"]
    ],
    _Route21Fisher1EndBattleText: [["text", "Dang!"], ["prompt"]],
    _Route21Fisher1AfterBattleText: [
      ["text", "I can't catch"],
      ["line", "anything good!"]
    ],
    _Route21Fisher2BattleText: [
      ["text", "I got a big haul!"],
      ["line", "Wanna go for it?"]
    ],
    _Route21Fisher2EndBattleText: [
      ["text", "Darn"],
      ["line", "MAGIKARP!"],
      ["prompt"]
    ],
    _Route21Fisher2AfterBattleText: [
      ["text", "I seem to only"],
      ["line", "catch MAGIKARP!"]
    ],
    _Route21Swimmer1BattleText: [
      ["text", "The sea cleanses"],
      ["line", "my body and soul!"]
    ],
    _Route21Swimmer1EndBattleText: [["text", "Ayah!"], ["prompt"]],
    _Route21Swimmer1AfterBattleText: [
      ["text", "I like the"],
      ["line", "mountains too!"]
    ],
    _Route21Swimmer2BattleText: [
      ["text", "What's wrong with"],
      ["line", "me swimming?"]
    ],
    _Route21Swimmer2EndBattleText: [
      ["text", "Cheap"],
      ["line", "shot!"],
      ["prompt"]
    ],
    _Route21Swimmer2AfterBattleText: [
      ["text", "I look like what?"],
      ["line", "A studded inner"],
      ["cont", "tube? Get lost!"]
    ],
    _Route21Swimmer3BattleText: [
      ["text", "I caught all my"],
      ["line", "#MON at sea!"]
    ],
    _Route21Swimmer3EndBattleText: [
      ["text", "Diver!!"],
      ["line", "Down!!"],
      ["prompt"]
    ],
    _Route21Swimmer3AfterBattleText: [
      ["text", "Where'd you catch"],
      ["line", "your #MON?"]
    ],
    _Route21Swimmer4BattleText: [
      ["text", "Right now, I'm in"],
      ["line", "a triathlon meet!"]
    ],
    _Route21Swimmer4EndBattleText: [
      ["text", "Pant..."],
      ["line", "pant...pant..."],
      ["prompt"]
    ],
    _Route21Swimmer4AfterBattleText: [
      ["text", "I'm beat!"],
      ["line", "But, I still have"],
      ["cont", "the bike race and"],
      ["cont", "marathon left!"]
    ],
    _Route21Swimmer5BattleText: [
      ["text", "Ahh! Feel the sun"],
      ["line", "and the wind!"]
    ],
    _Route21Swimmer5EndBattleText: [
      ["text", "Yow!"],
      ["line", "I lost!"],
      ["prompt"]
    ],
    _Route21Swimmer5AfterBattleText: [
      ["text", "I'm sunburnt to a"],
      ["line", "crisp!"]
    ],
    _Route21Fisher3BattleText: [
      ["text", "Hey, don't scare"],
      ["line", "away the fish!"]
    ],
    _Route21Fisher3EndBattleText: [
      ["text", "Sorry!"],
      ["line", "I didn't mean it!"],
      ["prompt"]
    ],
    _Route21Fisher3AfterBattleText: [
      ["text", "I was just angry"],
      ["line", "that I couldn't"],
      ["cont", "catch anything."]
    ],
    _Route21Fisher4BattleText: [
      ["text", "Keep me company"],
      ["line", "'til I get a hit!"]
    ],
    _Route21Fisher4EndBattleText: [
      ["text", "That"],
      ["line", "burned some time."],
      ["prompt"]
    ],
    _Route21Fisher4AfterBattleText: [
      ["text", "Oh wait! I got a"],
      ["line", "bite! Yeah!"]
    ]
  }
};
