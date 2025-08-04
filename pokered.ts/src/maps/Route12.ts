import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_BLOCKS } from "../data/blocks/Route12";
import { OverworldSprite } from "../sprite";

export const Route12: Map = {
  width: 10,
  height: 54,
  borderBlock: 67,
  blocks: ROUTE_12_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.LavenderTown, xOffset: 0 },
    south: { map: MapName.Route13, xOffset: -20 },
    west: { map: MapName.Route11, yOffset: 27 }
  },
  objects: {
    warps: [
      { x: 10, y: 15, toMap: MapName.Route12Gate1F, warpIndex: 0 },
      { x: 11, y: 15, toMap: MapName.Route12Gate1F, warpIndex: 1 },
      { x: 10, y: 21, toMap: MapName.Route12Gate1F, warpIndex: 2 },
      { x: 11, y: 77, toMap: MapName.Route12SuperRodHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 13, y: 13, signId: "TEXT_ROUTE12_SIGN" },
      { x: 11, y: 63, signId: "TEXT_ROUTE12_SPORT_FISHING_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 62,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SNORLAX,
        movement: "STAY",
        textId: "TEXT_ROUTE12_SNORLAX"
      },
      {
        type: "trainer",
        x: 14,
        y: 31,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER1",
        trainerId: "OPP_FISHER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 5,
        y: 39,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER2",
        trainerId: "OPP_FISHER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 11,
        y: 92,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE12_COOLTRAINER_M",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 14,
        y: 76,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE12_SUPER_NERD",
        trainerId: "OPP_ROCKER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 12,
        y: 40,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER3",
        trainerId: "OPP_FISHER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 9,
        y: 52,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER4",
        trainerId: "OPP_FISHER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 6,
        y: 87,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE12_FISHER5",
        trainerId: "OPP_FISHER",
        trainerLevel: 11
      },
      {
        type: "item",
        x: 14,
        y: 35,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE12_TM_PAY_DAY",
        itemId: "TM_PAY_DAY"
      },
      {
        type: "item",
        x: 5,
        y: 89,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE12_IRON",
        itemId: "IRON"
      }
    ]
  },
  text: {
    _Route12SnorlaxText: [
      ["text", "A sleeping #MON"],
      ["line", "blocks the way!"]
    ],
    _Route12SnorlaxWokeUpText: [
      ["text", "SNORLAX woke up!"],
      ["para", "It attacked in a"],
      ["line", "grumpy rage!"]
    ],
    _Route12SnorlaxCalmedDownText: [
      ["text", "SNORLAX calmed"],
      ["line", "down! With a big"],
      ["cont", "yawn, it returned"],
      ["cont", "to the mountains!"]
    ],
    _Route12Fisher1BattleText: [
      ["text", "Yeah! I got a"],
      ["line", "bite, here!"]
    ],
    _Route12Fisher1EndBattleText: [
      ["text", "Tch!"],
      ["line", "Just a small fry!"],
      ["prompt"]
    ],
    _Route12Fisher1AfterBattleText: [
      ["text", "Hang on! My line's"],
      ["line", "snagged!"]
    ],
    _Route12Fisher2BattleText: [
      ["text", "Be patient!"],
      ["line", "Fishing is a"],
      ["cont", "waiting game!"]
    ],
    _Route12Fisher2EndBattleText: [
      ["text", "That"],
      ["line", "one got away!"],
      ["prompt"]
    ],
    _Route12Fisher2AfterBattleText: [
      ["text", "With a better ROD,"],
      ["line", "I could catch"],
      ["cont", "better #MON!"]
    ],
    _Route12CooltrainerMBattleText: [
      ["text", "Have you found a"],
      ["line", "MOON STONE?"]
    ],
    _Route12CooltrainerMEndBattleText: [["text", "Oww!"], ["prompt"]],
    _Route12CooltrainerMAfterBattleText: [
      ["text", "I could have made"],
      ["line", "my #MON evolve"],
      ["cont", "with MOON STONE!"]
    ],
    _Route12SuperNerdBattleText: [
      ["text", "Electricity is my"],
      ["line", "specialty!"]
    ],
    _Route12SuperNerdEndBattleText: [["text", "Unplugged!"], ["prompt"]],
    _Route12SuperNerdAfterBattleText: [
      ["text", "Water conducts"],
      ["line", "electricity, so"],
      ["cont", "you should zap"],
      ["cont", "sea #MON!"]
    ],
    _Route12Fisher3BattleText: [
      ["text", "The FISHING FOOL"],
      ["line", "vs. #MON KID!"]
    ],
    _Route12Fisher3EndBattleText: [
      ["text", "Too"],
      ["line", "much!"],
      ["prompt"]
    ],
    _Route12Fisher3AfterBattleText: [
      ["text", "You beat me at"],
      ["line", "#MON, but I'm"],
      ["cont", "good at fishing!"]
    ],
    _Route12Fisher4BattleText: [
      ["text", "I'd rather be"],
      ["line", "working!"]
    ],
    _Route12Fisher4EndBattleText: [
      ["text", "It's"],
      ["line", "not easy..."],
      ["prompt"]
    ],
    _Route12Fisher4AfterBattleText: [
      ["text", "It's all right."],
      ["line", "Losing doesn't"],
      ["cont", "bug me any more."]
    ],
    _Route12Fisher5BattleText: [
      ["text", "You never know"],
      ["line", "what you could"],
      ["cont", "catch!"]
    ],
    _Route12Fisher5EndBattleText: [
      ["text", "Lost"],
      ["line", "it!"],
      ["prompt"]
    ],
    _Route12Fisher5AfterBattleText: [
      ["text", "I catch MAGIKARP"],
      ["line", "all the time, but"],
      ["cont", "they're so weak!"]
    ],
    _Route12SignText: [
      ["text", "ROUTE 12 "],
      ["line", "North to LAVENDER"]
    ],
    _Route12SportFishingSignText: [["text", "SPORT FISHING AREA"]]
  }
};
