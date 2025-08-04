import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_25_BLOCKS } from "../data/blocks/Route25";
import { OverworldSprite } from "../sprite";

export const Route25: Map = {
  width: 30,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_25_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.Route24, yOffset: 0 }
  },
  objects: {
    warps: [{ x: 45, y: 3, toMap: MapName.BillsHouse, warpIndex: 0 }],
    backgroundItems: [{ x: 43, y: 3, signId: "TEXT_ROUTE25_BILL_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 14,
        y: 2,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE25_YOUNGSTER1",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 18,
        y: 5,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE25_YOUNGSTER2",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 24,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE25_COOLTRAINER_M",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 18,
        y: 8,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE25_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 32,
        y: 3,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE25_YOUNGSTER3",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 37,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE25_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 8,
        y: 4,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE25_HIKER1",
        trainerId: "OPP_HIKER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 23,
        y: 9,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE25_HIKER2",
        trainerId: "OPP_HIKER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 13,
        y: 7,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE25_HIKER3",
        trainerId: "OPP_HIKER",
        trainerLevel: 4
      },
      {
        type: "item",
        x: 22,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE25_TM_SEISMIC_TOSS",
        itemId: "TM_SEISMIC_TOSS"
      }
    ]
  },
  text: {
    _Route25Youngster1BattleText: [
      ["text", "Local trainers"],
      ["line", "come here to"],
      ["cont", "practice!"]
    ],
    _Route25Youngster1EndBattleText: [
      ["text", "You're"],
      ["line", "decent."],
      ["prompt"]
    ],
    _Route25Youngster1AfterBattleText: [
      ["text", "All #MON have"],
      ["line", "weaknesses. It's"],
      ["cont", "best to raise"],
      ["cont", "different kinds."]
    ],
    _Route25Youngster2BattleText: [
      ["text", "Dad took me to a"],
      ["line", "great party on"],
      ["cont", "S.S.ANNE at"],
      ["cont", "VERMILION CITY!"]
    ],
    _Route25Youngster2EndBattleText: [
      ["text", "I'm"],
      ["line", "not mad!"],
      ["prompt"]
    ],
    _Route25Youngster2AfterBattleText: [
      ["text", "On S.S.ANNE, I"],
      ["line", "saw trainers from"],
      ["cont", "around the world."]
    ],
    _Route25CooltrainerMBattleText: [
      ["text", "I'm a cool guy."],
      ["line", "I've got a girl"],
      ["cont", "friend!"]
    ],
    _Route25CooltrainerMEndBattleText: [
      ["text", "Aww,"],
      ["line", "darn..."],
      ["prompt"]
    ],
    _Route25CooltrainerMAfterBattleText: [
      ["text", "Oh well. My girl"],
      ["line", "will cheer me up."]
    ],
    _Route25CooltrainerF1BattleText: [
      ["text", "Hi! My boy"],
      ["line", "friend is cool!"]
    ],
    _Route25CooltrainerF1EndBattleText: [
      ["text", "I was in"],
      ["line", "bad condition!"],
      ["prompt"]
    ],
    _Route25CooltrainerF1AfterBattleText: [
      ["text", "I wish my guy was"],
      ["line", "as good as you!"]
    ],
    _Route25Youngster3BattleText: [
      ["text", "I knew I had to"],
      ["line", "fight you!"]
    ],
    _Route25Youngster3EndBattleText: [
      ["text", "I knew"],
      ["line", "I'd lose too!"],
      ["prompt"]
    ],
    _Route25Youngster3AfterBattleText: [
      ["text", "If your #MON"],
      ["line", "gets confused or"],
      ["cont", "falls asleep,"],
      ["cont", "switch it!"]
    ],
    _Route25CooltrainerF2BattleText: [
      ["text", "My friend has a"],
      ["line", "cute #MON."],
      ["cont", "I'm so jealous!"]
    ],
    _Route25CooltrainerF2EndBattleText: [
      ["text", "I'm"],
      ["line", "not so jealous!"],
      ["prompt"]
    ],
    _Route25CooltrainerF2AfterBattleText: [
      ["text", "You came from MT."],
      ["line", "MOON? May I have"],
      ["cont", "a CLEFAIRY?"]
    ],
    _Route25Hiker1BattleText: [
      ["text", "I just got down"],
      ["line", "from MT.MOON,"],
      ["cont", "but I'm ready!"]
    ],
    _Route25Hiker1EndBattleText: [
      ["text", "You"],
      ["line", "worked hard!"],
      ["prompt"]
    ],
    _Route25Hiker1AfterBattleText: [
      ["text", "Drat!"],
      ["line", "A ZUBAT bit me"],
      ["cont", "back in there."]
    ],
    _Route25Hiker2BattleText: [
      ["text", "I'm off to see a"],
      ["line", "#MON collector"],
      ["cont", "at the cape!"]
    ],
    _Route25Hiker2EndBattleText: [
      ["text", "You"],
      ["line", "got me."],
      ["prompt"]
    ],
    _Route25Hiker2AfterBattleText: [
      ["text", "The collector has"],
      ["line", "many rare kinds"],
      ["cont", "of #MON."]
    ],
    _Route25Hiker3BattleText: [
      ["text", "You're going to"],
      ["line", "see BILL? First,"],
      ["cont", "let's fight!"]
    ],
    _Route25Hiker3EndBattleText: [
      ["text", "You're"],
      ["line", "something."],
      ["prompt"]
    ],
    _Route25Hiker3AfterBattleText: [
      ["text", "The trail below"],
      ["line", "is a shortcut to"],
      ["cont", "CERULEAN CITY."]
    ],
    _Route25BillSignText: [
      ["text", "SEA COTTAGE"],
      ["line", "BILL lives here!"]
    ]
  }
};
