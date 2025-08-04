import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_B1F_ROOMS_BLOCKS } from "../data/blocks/SSAnneB1FRooms";
import { OverworldSprite } from "../sprite";

export const SSAnneB1FRooms: Map = {
  width: 12,
  height: 8,
  borderBlock: 12,
  blocks: SS_ANNE_B1F_ROOMS_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 4 },
      { x: 3, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 4 },
      { x: 12, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 3 },
      { x: 13, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 3 },
      { x: 22, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 2 },
      { x: 23, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 2 },
      { x: 2, y: 15, toMap: MapName.SSAnneB1F, warpIndex: 1 },
      { x: 3, y: 15, toMap: MapName.SSAnneB1F, warpIndex: 1 },
      { x: 12, y: 15, toMap: MapName.SSAnneB1F, warpIndex: 0 },
      { x: 13, y: 15, toMap: MapName.SSAnneB1F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 0,
        y: 13,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR1",
        trainerId: "OPP_SAILOR",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 2,
        y: 11,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR2",
        trainerId: "OPP_SAILOR",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 12,
        y: 3,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR3",
        trainerId: "OPP_SAILOR",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 22,
        y: 2,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR4",
        trainerId: "OPP_SAILOR",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 0,
        y: 2,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR5",
        trainerId: "OPP_SAILOR",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 0,
        y: 4,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_FISHER",
        trainerId: "OPP_FISHER",
        trainerLevel: 2
      },
      {
        type: "sprite",
        x: 10,
        y: 13,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 11,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_MACHOKE"
      },
      {
        type: "item",
        x: 20,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_ETHER",
        itemId: "ETHER"
      },
      {
        type: "item",
        x: 10,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_TM_REST",
        itemId: "TM_REST"
      },
      {
        type: "item",
        x: 12,
        y: 11,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_MAX_POTION",
        itemId: "MAX_POTION"
      }
    ]
  },
  text: {
    _SSAnneB1FRoomsMachokeText: [
      ["text", "MACHOKE: Gwoh!"],
      ["line", "Goggoh!@"],
      ["text_end"]
    ],
    _SSAnneB1FRoomsSailor1BattleText: [
      ["text", "You know what they"],
      ["line", "say about sailors"],
      ["cont", "and fighting!"]
    ],
    _SSAnneB1FRoomsSailor1EndBattleText: [
      ["text", "Right!"],
      ["line", "Good fight, mate!"],
      ["prompt"]
    ],
    _SSAnneB1FRoomsSailor1AfterBattleText: [
      ["text", "Haha! Want to be"],
      ["line", "a sailor, mate?"]
    ],
    _SSAnneB1FRoomsSailor2BattleText: [
      ["text", "My sailor's pride"],
      ["line", "is at stake!"]
    ],
    _SSAnneB1FRoomsSailor2EndBattleText: [
      ["text", "Your"],
      ["line", "spirit sank me!"],
      ["prompt"]
    ],
    _SSAnneB1FRoomsSailor2AfterBattleText: [
      ["text", "Did you see the"],
      ["line", "FISHING GURU in"],
      ["cont", "VERMILION CITY?"]
    ],
    _SSAnneB1FRoomsSailor3BattleText: [
      ["text", "Us sailors have"],
      ["line", "#MON too!"]
    ],
    _SSAnneB1FRoomsSailor3EndBattleText: [
      ["text", "OK, "],
      ["line", "you're not bad."],
      ["prompt"]
    ],
    _SSAnneB1FRoomsSailor3AfterBattleText: [
      ["text", "We caught all our"],
      ["line", "#MON while"],
      ["cont", "out at sea!"]
    ],
    _SSAnneB1FRoomsSailor4BattleText: [
      ["text", "I like feisty"],
      ["line", "kids like you!@"],
      ["text_end"]
    ],
    _SSAnneB1FRoomsSailor4EndBattleText: [
      ["text", "Argh!"],
      ["line", "Lost it!"],
      ["prompt"]
    ],
    _SSAnneB1FRoomsSailor4AfterBattleText: [
      ["text", "Sea #MON live"],
      ["line", "in deep water."],
      ["cont", "You'll need a ROD!"]
    ],
    _SSAnneB1FRoomsSailor5BattleText: [
      ["text", "Matey, you're"],
      ["line", "walking the plank"],
      ["cont", "if you lose!"]
    ],
    _SSAnneB1FRoomsSailor5EndBattleText: [
      ["text", "Argh!"],
      ["line", "Beaten by a kid!"],
      ["prompt"]
    ],
    _SSAnneB1FRoomsSailor5AfterBattleText: [
      ["text", "Jellyfish some-"],
      ["line", "times drift into"],
      ["cont", "the ship."]
    ],
    _SSAnneB1FRoomsFisherBattleText: [
      ["text", "Hello stranger!"],
      ["line", "Stop and chat!"],
      ["para", "All my #MON"],
      ["line", "are from the sea!"]
    ],
    _SSAnneB1FRoomsFisherEndBattleText: [
      ["text", "Darn!"],
      ["line", "I let that one"],
      ["cont", "get away!"],
      ["prompt"]
    ],
    _SSAnneB1FRoomsFisherAfterBattleText: [
      ["text", "I was going to"],
      ["line", "make you my"],
      ["cont", "assistant too!"]
    ],
    _SSAnneB1FRoomsSuperNerdText: [
      ["text", "My buddy, MACHOKE,"],
      ["line", "is super strong!"],
      ["para", "He has enough"],
      ["line", "STRENGTH to move"],
      ["cont", "big rocks!"]
    ]
  }
};
