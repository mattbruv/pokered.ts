import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_3_BLOCKS } from "../data/blocks/Route3";
import { OverworldSprite } from "../sprite";

export const Route3: Map = {
  width: 35,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_3_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route4, xOffset: 25 },
    west: { map: MapName.PewterCity, yOffset: -4 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 59, y: 9, signId: "TEXT_ROUTE3_SIGN" }],
    objects: [
      {
        type: "sprite",
        x: 57,
        y: 11,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_ROUTE3_SUPER_NERD"
      },
      {
        type: "trainer",
        x: 10,
        y: 6,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER1",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 14,
        y: 4,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER2",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 16,
        y: 9,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 19,
        y: 5,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER3",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 23,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 22,
        y: 9,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER4",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 24,
        y: 6,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE3_YOUNGSTER5",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 33,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE3_COOLTRAINER_F3",
        trainerId: "OPP_LASS",
        trainerLevel: 3
      }
    ]
  },
  text: {
    _Route3Text1: [
      ["text", "Whew... I better"],
      ["line", "take a rest..."],
      ["cont", "Groan..."],
      ["para", "That tunnel from"],
      ["line", "CERULEAN takes a"],
      ["cont", "lot out of you!"]
    ],
    _Route3Youngster1BattleText: [
      ["text", "Hey! I met you in"],
      ["line", "VIRIDIAN FOREST!"]
    ],
    _Route3Youngster1EndBattleText: [
      ["text", "You"],
      ["line", "beat me again!"],
      ["prompt"]
    ],
    _Route3Youngster1AfterBattleText: [
      ["text", "There are other"],
      ["line", "kinds of #MON"],
      ["cont", "than those found"],
      ["cont", "in the forest!"]
    ],
    _Route3Youngster2BattleText: [
      ["text", "Hi! I like shorts!"],
      ["line", "They're comfy and"],
      ["cont", "easy to wear!"]
    ],
    _Route3Youngster2EndBattleText: [
      ["text", "I don't"],
      ["line", "believe it!"],
      ["prompt"]
    ],
    _Route3Youngster2AfterBattleText: [
      ["text", "Are you storing"],
      ["line", "your #MON on"],
      ["cont", "PC? Each BOX can"],
      ["cont", "hold 20 #MON!"]
    ],
    _Route3CooltrainerF1BattleText: [
      ["text", "You looked at me,"],
      ["line", "didn't you?"]
    ],
    _Route3CooltrainerF1EndBattleText: [
      ["text", "You're"],
      ["line", "mean!"],
      ["prompt"]
    ],
    _Route3CooltrainerF1AfterBattleText: [
      ["text", "Quit staring if"],
      ["line", "you don't want to"],
      ["cont", "fight!"]
    ],
    _Route3Youngster3BattleText: [
      ["text", "Are you a trainer?"],
      ["line", "Let's fight!"]
    ],
    _Route3Youngster3EndBattleText: [
      ["text", "If I"],
      ["line", "had new #MON I"],
      ["cont", "would've won!"],
      ["prompt"]
    ],
    _Route3Youngster3AfterBattleText: [
      ["text", "If a #MON BOX"],
      ["line", "on the PC gets"],
      ["cont", "full, just switch"],
      ["cont", "to another BOX!"]
    ],
    _Route3CooltrainerF2BattleText: [
      ["text", "That look you"],
      ["line", "gave me, it's so"],
      ["cont", "intriguing!"]
    ],
    _Route3CooltrainerF2EndBattleText: [["text", "Be nice!"], ["prompt"]],
    _Route3CooltrainerF2AfterBattleText: [
      ["text", "Avoid fights by"],
      ["line", "not letting"],
      ["cont", "people see you!"]
    ],
    _Route3Youngster4BattleText: [
      ["text", "Hey! You're not"],
      ["line", "wearing shorts!"]
    ],
    _Route3Youngster4EndBattleText: [
      ["text", "Lost!"],
      ["line", "Lost! Lost!"],
      ["prompt"]
    ],
    _Route3Youngster4AfterBattleText: [
      ["text", "I always wear"],
      ["line", "shorts, even in"],
      ["cont", "winter!"]
    ],
    _Route3Youngster5BattleText: [
      ["text", "You can fight my"],
      ["line", "new #MON!"]
    ],
    _Route3Youngster5EndBattleText: [
      ["text", "Done"],
      ["line", "like dinner!"],
      ["prompt"]
    ],
    _Route3Youngster5AfterBattleText: [
      ["text", "Trained #MON"],
      ["line", "are stronger than"],
      ["cont", "the wild ones!"]
    ],
    _Route3CooltrainerF3BattleText: [
      ["text", "Eek! Did you"],
      ["line", "touch me?"]
    ],
    _Route3CooltrainerF3EndBattleText: [["text", "That's it?"], ["prompt"]],
    _Route3CooltrainerF3AfterBattleText: [
      ["text", "ROUTE 4 is at the"],
      ["line", "foot of MT.MOON."]
    ],
    _Route3SignText: [
      ["text", "ROUTE 3"],
      ["line", "MT.MOON AHEAD"]
    ]
  }
};
