import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DAYCARE_BLOCKS } from "../data/blocks/Daycare";
import { OverworldSprite } from "../sprite";

export const Daycare: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: DAYCARE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_DAYCARE_GENTLEMAN"
      }
    ]
  },
  text: {
    _DaycareGentlemanIntroText: [
      ["text", "I run a DAYCARE."],
      ["line", "Would you like me"],
      ["cont", "to raise one of"],
      ["cont", "your #MON?"]
    ],
    _DaycareGentlemanWhichMonText: [
      ["text", "Which #MON"],
      ["line", "should I raise?"],
      ["prompt"]
    ],
    _DaycareGentlemanWillLookAfterMonText: [
      ["text", "Fine, I'll look"],
      ["line", "after @"],
      ["text_ram", "wNameBuffer"],
      ["text_start"],
      ["cont", "for a while."],
      ["prompt"]
    ],
    _DaycareGentlemanComeSeeMeInAWhileText: [
      ["text", "Come see me in"],
      ["line", "a while."]
    ],
    _DaycareGentlemanMonHasGrownText: [
      ["text", "Your @"],
      ["text_ram", "wNameBuffer"],
      ["text_start"],
      ["line", "has grown a lot!"],
      ["para", "By level, it's"],
      ["line", "grown by @"],
      ["text_decimal", "wDayCareNumLevelsGrown, 1, 3"],
      ["text", "!"],
      ["para", "Aren't I great?"],
      ["prompt"]
    ],
    _DaycareGentlemanOweMoneyText: [
      ["text", "You owe me ¥@"],
      ["text_bcd", "wDayCareTotalCost, 2 | LEADING_ZEROES | LEFT_ALIGN"],
      ["text_start"],
      ["line", "for the return"],
      ["cont", "of this #MON."]
    ],
    _DaycareGentlemanGotMonBackText: [
      ["text", "<PLAYER> got"],
      ["line", "@"],
      ["text_ram", "wDayCareMonName"],
      ["text", " back!"]
    ],
    _DaycareGentlemanMonNeedsMoreTimeText: [
      ["text", "Back already?"],
      ["line", "Your @"],
      ["text_ram", "wNameBuffer"],
      ["text_start"],
      ["cont", "needs some more"],
      ["cont", "time with me."],
      ["prompt"]
    ]
  }
};
