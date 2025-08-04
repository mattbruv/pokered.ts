import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_DINER_BLOCKS } from "../data/blocks/CeladonDiner";
import { OverworldSprite } from "../sprite";

export const CeladonDiner: Map = {
  width: 5,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_DINER_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 10 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 10 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 5,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "WALK",
        textId: "TEXT_CELADONDINER_COOK"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_WOMAN,
        movement: "STAY",
        textId: "TEXT_CELADONDINER_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_CELADONDINER_MIDDLE_AGED_MAN"
      },
      {
        type: "sprite",
        x: 5,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_CELADONDINER_FISHER"
      },
      {
        type: "sprite",
        x: 0,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_CELADONDINER_GYM_GUIDE"
      }
    ]
  },
  text: {
    _CeladonDinerCookText: [
      ["text", "Hi!"],
      ["para", "We're taking a"],
      ["line", "break now."]
    ],
    _CeladonDinerMiddleAgedWomanText: [
      ["text", "My #MON are"],
      ["line", "weak, so I often"],
      ["cont", "have to go to the"],
      ["cont", "DRUG STORE."]
    ],
    _CeladonDinerMiddleAgedManText: [
      ["text", "Psst! There's a"],
      ["line", "basement under"],
      ["cont", "the GAME CORNER."]
    ],
    _CeladonDinerFisherText: [
      ["text", "Munch..."],
      ["para", "The man at that"],
      ["line", "table lost it all"],
      ["cont", "at the slots."]
    ],
    _CeladonDinerGymGuideImFlatOutBustedText: [
      ["text", "Go ahead! Laugh!"],
      ["para", "I'm flat out"],
      ["line", "busted!"],
      ["para", "No more slots for"],
      ["line", "me! I'm going"],
      ["cont", "straight!"],
      ["para", "Here! I won't be"],
      ["line", "needing this any-"],
      ["cont", "more!"],
      ["prompt"]
    ],
    _CeladonDinerGymGuideReceivedCoinCaseText: [
      ["text", "<PLAYER> received"],
      ["line", "a @"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _CeladonDinerGymGuideCoinCaseNoRoomText: [
      ["text", "Make room for"],
      ["line", "this!"]
    ],
    _CeladonDinerGymGuideWinItBackText: [
      ["text", "I always thought"],
      ["line", "I was going to"],
      ["cont", "win it back..."]
    ]
  }
};
