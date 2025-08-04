import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_9_BLOCKS } from "../data/blocks/Route9";
import { OverworldSprite } from "../sprite";

export const Route9: Map = {
  width: 30,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_9_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.CeruleanCity, yOffset: -4 },
    east: { map: MapName.Route10, yOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 25, y: 7, signId: "TEXT_ROUTE9_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 13,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 24,
        y: 7,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_COOLTRAINER_M1",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 31,
        y: 7,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_COOLTRAINER_M2",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 48,
        y: 8,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 16,
        y: 15,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_HIKER1",
        trainerId: "OPP_HIKER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 43,
        y: 3,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_HIKER2",
        trainerId: "OPP_HIKER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 22,
        y: 2,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE9_YOUNGSTER1",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 45,
        y: 15,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_HIKER3",
        trainerId: "OPP_HIKER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 40,
        y: 8,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE9_YOUNGSTER2",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 14
      },
      {
        type: "item",
        x: 10,
        y: 15,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE9_TM_TELEPORT",
        itemId: "TM_TELEPORT"
      }
    ]
  },
  text: {
    _Route9CooltrainerF1BattleText: [
      ["text", "You have #MON"],
      ["line", "with you!"],
      ["cont", "You're mine!"]
    ],
    _Route9CooltrainerF1EndBattleText: [
      ["text", "You"],
      ["line", "deceived me!"],
      ["prompt"]
    ],
    _Route9CooltrainerF1AfterBattleText: [
      ["text", "You need light to"],
      ["line", "get through that"],
      ["cont", "dark tunnel ahead."]
    ],
    _Route9CooltrainerM1BattleText: [
      ["text", "Who's that walking"],
      ["line", "with those good"],
      ["cont", "looking #MON?"]
    ],
    _Route9CooltrainerM1EndBattleText: [
      ["text", "Out"],
      ["line", "like a light!"],
      ["prompt"]
    ],
    _Route9CooltrainerM1AfterBattleText: [["text", "Keep walking!"]],
    _Route9CooltrainerM2BattleText: [
      ["text", "I'm taking ROCK"],
      ["line", "TUNNEL to go to"],
      ["cont", "LAVENDER..."]
    ],
    _Route9CooltrainerM2EndBattleText: [
      ["text", "Can't"],
      ["line", "measure up!"],
      ["prompt"]
    ],
    _Route9CooltrainerM2AfterBattleText: [
      ["text", "Are you off to"],
      ["line", "ROCK TUNNEL too?"]
    ],
    _Route9CooltrainerF2BattleText: [
      ["text", "Don't you dare"],
      ["line", "condescend me!"]
    ],
    _Route9CooltrainerF2EndBattleText: [
      ["text", "No!"],
      ["line", "You're too much!"],
      ["prompt"]
    ],
    _Route9CooltrainerF2AfterBattleText: [
      ["text", "You're obviously"],
      ["line", "talented! Good"],
      ["cont", "luck to you!"]
    ],
    _Route9Hiker1BattleText: [
      ["text", "Bwahaha!"],
      ["line", "Great! I was"],
      ["cont", "bored, eh!"]
    ],
    _Route9Hiker1EndBattleText: [
      ["text", "Keep it"],
      ["line", "coming, eh!"],
      ["para", "Oh wait. I'm out"],
      ["line", "of #MON!"],
      ["prompt"]
    ],
    _Route9Hiker1AfterBattleText: [
      ["text", "You sure had guts"],
      ["line", "standing up to me"],
      ["cont", "there, eh?"]
    ],
    _Route9Hiker2BattleText: [
      ["text", "Hahaha!"],
      ["line", "Aren't you a"],
      ["cont", "little toughie!"]
    ],
    _Route9Hiker2EndBattleText: [
      ["text", "What's"],
      ["line", "that?"],
      ["prompt"]
    ],
    _Route9Hiker2AfterBattleText: [
      ["text", "Hahaha! Kids"],
      ["line", "should be tough!"]
    ],
    _Route9Youngster1BattleText: [
      ["text", "I got up early"],
      ["line", "every day to"],
      ["cont", "raise my #MON"],
      ["cont", "from cocoons!"]
    ],
    _Route9Youngster1EndBattleText: [
      ["text", "WHAT?"],
      ["para", "What a total"],
      ["line", "waste of time!"],
      ["prompt"]
    ],
    _Route9Youngster1AfterBattleText: [
      ["text", "I have to collect"],
      ["line", "more than bugs to"],
      ["cont", "get stronger..."]
    ],
    _Route9Hiker3BattleText: [
      ["text", "Hahahaha!"],
      ["line", "Come on, dude!"]
    ],
    _Route9Hiker3EndBattleText: [
      ["text", "Hahahaha!"],
      ["line", "You beat me fair!"],
      ["prompt"]
    ],
    _Route9Hiker3AfterBattleText: [
      ["text", "Hahahaha!"],
      ["line", "Us hearty guys"],
      ["cont", "always laugh!"]
    ],
    _Route9Youngster2BattleText: [
      ["text", "Go, my super bug"],
      ["line", "#MON!"]
    ],
    _Route9Youngster2EndBattleText: [
      ["text", "My"],
      ["line", "bugs..."],
      ["prompt"]
    ],
    _Route9Youngster2AfterBattleText: [
      ["text", "If you don't like"],
      ["line", "bug #MON, you"],
      ["cont", "bug me!"]
    ],
    _Route9SignText: [
      ["text", "ROUTE 9"],
      ["line", "CERULEAN CITY-"],
      ["cont", "ROCK TUNNEL"]
    ]
  }
};
