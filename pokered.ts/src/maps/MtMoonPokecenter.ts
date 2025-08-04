import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_POKECENTER_BLOCKS } from "../data/blocks/MtMoonPokecenter";
import { OverworldSprite } from "../sprite";

export const MtMoonPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: MT_MOON_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_NURSE,
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 10,
        y: 6,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "WALK",
        textId: "TEXT_MTMOONPOKECENTER_MAGIKARP_SALESMAN"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_CLIPBOARD,
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_CLIPBOARD"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  text: {
    _MtMoonPokecenterYoungsterText: [
      ["text", "I've 6 # BALLs"],
      ["line", "set in my belt."],
      ["para", "At most, you can"],
      ["line", "carry 6 #MON."]
    ],
    _MtMoonPokecenterGentlemanText: [
      ["text", "TEAM ROCKET"],
      ["line", "attacks CERULEAN"],
      ["cont", "citizens..."],
      ["para", "TEAM ROCKET is"],
      ["line", "always in the"],
      ["cont", "news!"]
    ],
    _MtMoonPokecenterMagikarpSalesmanIGotADealText: [
      ["text", "MAN: Hello, there!"],
      ["line", "Have I got a deal"],
      ["cont", "just for you!"],
      ["para", "I'll let you have"],
      ["line", "a swell MAGIKARP"],
      ["cont", "for just ¥500!"],
      ["cont", "What do you say?"]
    ],
    _MtMoonPokecenterMagikarpSalesmanNoText: [
      ["text", "No? I'm only"],
      ["line", "doing this as a"],
      ["cont", "favor to you!"]
    ],
    _MtMoonPokecenterMagikarpSalesmanNoMoneyText: [
      ["text", "You'll need more"],
      ["line", "money than that!"]
    ],
    _MtMoonPokecenterMagikarpSalesmanNoRefundsText: [
      ["text", "MAN: Well, I don't"],
      ["line", "give refunds!"]
    ],
    _MtMoonPokecenterClipboardText: [["text_start"]]
  }
};
