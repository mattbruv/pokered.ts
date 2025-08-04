import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_GOOD_ROD_HOUSE_BLOCKS } from "../data/blocks/FuchsiaGoodRodHouse";
import { OverworldSprite } from "../sprite";

export const FuchsiaGoodRodHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 12,
  blocks: FUCHSIA_GOOD_ROD_HOUSE_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 0, toMap: "LAST_MAP", warpIndex: 8 },
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 7 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_FISHING_GURU,
        movement: "STAY",
        textId: "TEXT_FUCHSIAGOODRODHOUSE_FISHING_GURU"
      }
    ]
  },
  text: {
    _FuchsiaGoodRodHouseFishingGuruText: [
      ["text", "I'm the FISHING"],
      ["line", "GURU's older"],
      ["cont", "brother!"],
      ["para", "I simply Looove"],
      ["line", "fishing!"],
      ["para", "Do you like to"],
      ["line", "fish?"]
    ],
    _FuchsiaGoodRodHouseFishingGuruReceivedGoodRodText: [
      ["text", "Grand! I like"],
      ["line", "your style!"],
      ["para", "Take this and"],
      ["line", "fish, young one!"],
      ["para", "<PLAYER> received"],
      ["line", "a @"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _FuchsiaGoodRodHouseFishingGuruThatsSoDisappointingText: [
      ["text", "Oh... That's so"],
      ["line", "disappointing..."]
    ],
    _FuchsiaGoodRodHouseFishingGuruHowAreTheFishText: [
      ["text", "Hello there,"],
      ["line", "<PLAYER>!"],
      ["para", "How are the fish"],
      ["line", "biting?"]
    ],
    _FuchsiaGoodRodHouseFishingGuruNoRoomText: [
      ["text", "Oh no!"],
      ["para", "You have no room"],
      ["line", "for my gift!"]
    ]
  }
};
