import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_1F_ROOMS_BLOCKS } from "../data/blocks/SSAnne1FRooms";
import { OverworldSprite } from "../sprite";

export const SSAnne1FRooms: Map = {
  width: 12,
  height: 8,
  borderBlock: 12,
  blocks: SS_ANNE_1F_ROOMS_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 0, toMap: MapName.SSAnne1F, warpIndex: 2 },
      { x: 10, y: 0, toMap: MapName.SSAnne1F, warpIndex: 3 },
      { x: 20, y: 0, toMap: MapName.SSAnne1F, warpIndex: 4 },
      { x: 0, y: 10, toMap: MapName.SSAnne1F, warpIndex: 5 },
      { x: 10, y: 10, toMap: MapName.SSAnne1F, warpIndex: 6 },
      { x: 20, y: 10, toMap: MapName.SSAnne1F, warpIndex: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 2,
        y: 3,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_GENTLEMAN1",
        trainerId: "OPP_GENTLEMAN",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 11,
        y: 4,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_GENTLEMAN2",
        trainerId: "OPP_GENTLEMAN",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 11,
        y: 14,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_YOUNGSTER",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 13,
        y: 11,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_COOLTRAINER_F",
        trainerId: "OPP_LASS",
        trainerLevel: 11
      },
      {
        type: "sprite",
        x: 22,
        y: 3,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_SSANNE1FROOMS_GIRL1"
      },
      {
        type: "sprite",
        x: 0,
        y: 14,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_MIDDLE_AGED_MAN"
      },
      {
        type: "sprite",
        x: 2,
        y: 11,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 3,
        y: 11,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_FAIRY,
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_WIGGLYTUFF"
      },
      {
        type: "sprite",
        x: 10,
        y: 13,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_GIRL2"
      },
      {
        type: "item",
        x: 12,
        y: 15,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SSANNE1FROOMS_TM_BODY_SLAM",
        itemId: "TM_BODY_SLAM"
      },
      {
        type: "sprite",
        x: 21,
        y: 13,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "WALK",
        textId: "TEXT_SSANNE1FROOMS_GENTLEMAN3"
      }
    ]
  },
  text: {
    _SSAnne1FRoomsWigglytuffText: [
      ["text", "WIGGLYTUFF: Puup"],
      ["line", "pupuu!@"],
      ["text_end"]
    ],
    _SSAnne1FRoomsGentleman1BattleText: [
      ["text", "I travel alone"],
      ["line", "on my journeys!"],
      ["para", "My #MON are my"],
      ["line", "only friends!"]
    ],
    _SSAnne1FRoomsGentleman1EndBattleText: [
      ["text", "My, my"],
      ["line", "friends..."],
      ["prompt"]
    ],
    _SSAnne1FRoomsGentleman1AfterBattleText: [
      ["text", "You should be"],
      ["line", "nice to friends!"]
    ],
    _SSAnne1FRoomsGentleman2BattleText: [
      ["text", "You pup! How dare"],
      ["line", "you barge in!"]
    ],
    _SSAnne1FRoomsGentleman2EndBattleText: [
      ["text", "Humph!"],
      ["line", "You rude child!"],
      ["prompt"]
    ],
    _SSAnne1FRoomsGentleman2AfterBattleText: [
      ["text", "I wish to be left"],
      ["line", "alone! Get out!"]
    ],
    _SSAnne1FRoomsYoungsterBattleText: [
      ["text", "I love #MON!"],
      ["line", "Do you?"]
    ],
    _SSAnne1FRoomsYoungsterEndBattleText: [
      ["text", "Wow! "],
      ["line", "You're great!"],
      ["prompt"]
    ],
    _SSAnne1FRoomsYoungsterAfterBattleText: [
      ["text", "Let me be your"],
      ["line", "friend, OK?"],
      ["para", "Then we can trade"],
      ["line", "#MON!"]
    ],
    _SSAnne1FRoomsCooltrainerFBattleText: [
      ["text", "I collected these"],
      ["line", "#MON from all"],
      ["cont", "around the world!"]
    ],
    _SSAnne1FRoomsCooltrainerFEndBattleText: [
      ["text", "Oh no!"],
      ["line", "I went around the"],
      ["cont", "world for these!"],
      ["prompt"]
    ],
    _SSAnne1FRoomsCooltrainerFAfterBattleText: [
      ["text", "You hurt my poor"],
      ["line", "worldly #MON!"],
      ["para", "I demand that you"],
      ["line", "heal them at a"],
      ["cont", "#MON CENTER!"]
    ],
    _SSAnne1FRoomsGirl1Text: [
      ["text", "Waiter, I would"],
      ["line", "like a cherry pie"],
      ["cont", "please!"]
    ],
    _SSAnne1FRoomsMiddleAgedManText: [
      ["text", "A cruise is so"],
      ["line", "elegant yet cozy!"]
    ],
    _SSAnne1FRoomsLittleGirlText: [
      ["text", "I always travel"],
      ["line", "with WIGGLYTUFF!"]
    ],
    _SSAnne1FRoomsGirl2Text: [
      ["text", "We are cruising"],
      ["line", "around the world."]
    ],
    _SSAnne1FRoomsGentleman3Text: [
      ["text", "Ssh! I'm a GLOBAL"],
      ["line", "POLICE agent!"],
      ["para", "I'm on the trail"],
      ["line", "of TEAM ROCKET!"]
    ]
  }
};
