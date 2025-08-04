import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_2F_ROOMS_BLOCKS } from "../data/blocks/SSAnne2FRooms";
import { OverworldSprite } from "../sprite";

export const SSAnne2FRooms: Map = {
  width: 12,
  height: 8,
  borderBlock: 12,
  blocks: SS_ANNE_2F_ROOMS_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 5, toMap: MapName.SSAnne2F, warpIndex: 0 },
      { x: 3, y: 5, toMap: MapName.SSAnne2F, warpIndex: 0 },
      { x: 12, y: 5, toMap: MapName.SSAnne2F, warpIndex: 1 },
      { x: 13, y: 5, toMap: MapName.SSAnne2F, warpIndex: 1 },
      { x: 22, y: 5, toMap: MapName.SSAnne2F, warpIndex: 2 },
      { x: 23, y: 5, toMap: MapName.SSAnne2F, warpIndex: 2 },
      { x: 2, y: 15, toMap: MapName.SSAnne2F, warpIndex: 3 },
      { x: 3, y: 15, toMap: MapName.SSAnne2F, warpIndex: 3 },
      { x: 12, y: 15, toMap: MapName.SSAnne2F, warpIndex: 4 },
      { x: 13, y: 15, toMap: MapName.SSAnne2F, warpIndex: 4 },
      { x: 22, y: 15, toMap: MapName.SSAnne2F, warpIndex: 5 },
      { x: 23, y: 15, toMap: MapName.SSAnne2F, warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 10,
        y: 2,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_GENTLEMAN1",
        trainerId: "OPP_GENTLEMAN",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 13,
        y: 4,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_FISHER",
        trainerId: "OPP_FISHER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 0,
        y: 14,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_GENTLEMAN2",
        trainerId: "OPP_GENTLEMAN",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 2,
        y: 11,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_COOLTRAINER_F",
        trainerId: "OPP_LASS",
        trainerLevel: 12
      },
      {
        type: "sprite",
        x: 1,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_GENTLEMAN3"
      },
      {
        type: "item",
        x: 12,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_MAX_ETHER",
        itemId: "MAX_ETHER"
      },
      {
        type: "sprite",
        x: 21,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_GENTLEMAN4"
      },
      {
        type: "sprite",
        x: 22,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_GRAMPS"
      },
      {
        type: "item",
        x: 0,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "sprite",
        x: 12,
        y: 12,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_GENTLEMAN5"
      },
      {
        type: "sprite",
        x: 11,
        y: 14,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_LITTLE_BOY,
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_LITTLE_BOY"
      },
      {
        type: "sprite",
        x: 22,
        y: 12,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_BRUNETTE_GIRL"
      },
      {
        type: "sprite",
        x: 20,
        y: 12,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "STAY",
        textId: "TEXT_SSANNE2FROOMS_BEAUTY"
      }
    ]
  },
  text: {
    _SSAnne2FRoomsGentleman3Text: [
      ["text", "In all my travels"],
      ["line", "I've never seen"],
      ["cont", "any #MON sleep"],
      ["cont", "like this one!"],
      ["para", "It was something"],
      ["line", "like this!"],
      ["prompt"]
    ],
    _SSAnne2FRoomsGentleman4Text: [
      ["text", "Ah yes, I have"],
      ["line", "seen some #MON"],
      ["cont", "ferry people"],
      ["cont", "across the water!"]
    ],
    _SSAnne2FRoomsGrampsText: [
      ["text", "#MON can CUT"],
      ["line", "down small bushes."]
    ],
    _SSAnne2FRoomsGentleman5Text: [
      ["text", "Have you gone to"],
      ["line", "the SAFARI ZONE"],
      ["cont", "in FUCHSIA CITY?"],
      ["para", "It had many rare"],
      ["line", "kinds of #MON!!"]
    ],
    _SSAnne2FRoomsLittleBoyText: [
      ["text", "Me and my Daddy"],
      ["line", "think the SAFARI"],
      ["cont", "ZONE is awesome!"]
    ],
    _SSAnne2FRoomsBrunetteGirlText: [
      ["text", "The CAPTAIN looked"],
      ["line", "really sick and"],
      ["cont", "pale!"]
    ],
    _SSAnne2FRoomsBeautyText: [
      ["text", "I hear many people"],
      ["line", "get seasick!"]
    ],
    _SSAnne2FRoomsGentleman1BattleText: [
      ["text", "Competing against"],
      ["line", "the young keeps"],
      ["cont", "me youthful."]
    ],
    _SSAnne2FRoomsGentleman1EndBattleText: [
      ["text", "Good"],
      ["line", "fight! Ah, I feel"],
      ["cont", "young again!"],
      ["prompt"]
    ],
    _SSAnne2FRoomsGentleman1AfterBattleText: [
      ["text", "15 years ago, I"],
      ["line", "would have won!"]
    ],
    _SSAnne2FRoomsFisherBattleText: [
      ["text", "Check out what I"],
      ["line", "fished up!"]
    ],
    _SSAnne2FRoomsFisherEndBattleText: [
      ["text", "I'm"],
      ["line", "all out!"],
      ["prompt"]
    ],
    _SSAnne2FRoomsFisherAfterBattleText: [
      ["text", "Party?"],
      ["para", "The cruise ship's"],
      ["line", "party should be"],
      ["cont", "over by now."]
    ],
    _SSAnne2FRoomsGentleman2BattleText: [
      ["text", "Which do you like,"],
      ["line", "a strong or a"],
      ["cont", "rare #MON?"]
    ],
    _SSAnne2FRoomsGentleman2EndBattleText: [
      ["text", "I must"],
      ["line", "salute you!"],
      ["prompt"]
    ],
    _SSAnne2FRoomsGentleman2AfterBattleText: [
      ["text", "I prefer strong"],
      ["line", "and rare #MON."]
    ],
    _SSAnne2FRoomsCooltrainerFBattleText: [
      ["text", "I never saw you"],
      ["line", "at the party."]
    ],
    _SSAnne2FRoomsCooltrainerFEndBattleText: [
      ["text", "Take"],
      ["line", "it easy!"],
      ["prompt"]
    ],
    _SSAnne2FRoomsCooltrainerFAfterBattleText: [
      ["text", "Oh, I adore your"],
      ["line", "strong #MON!"]
    ]
  }
};
