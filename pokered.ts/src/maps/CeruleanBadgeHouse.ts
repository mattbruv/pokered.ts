import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_BADGE_HOUSE_BLOCKS } from "../data/blocks/CeruleanBadgeHouse";
import { OverworldSprite } from "../sprite";

export const CeruleanBadgeHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 12,
  blocks: CERULEAN_BADGE_HOUSE_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 0, toMap: "LAST_MAP", warpIndex: 9 },
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 8 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 8 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_CERULEANBADGEHOUSE_MIDDLE_AGED_MAN"
      }
    ]
  },
  text: {
    _CeruleanBadgeHouseMiddleAgedManText: [
      ["text", "#MON BADGEs"],
      ["line", "are owned only by"],
      ["cont", "skilled trainers."],
      ["para", "I see you have"],
      ["line", "at least one."],
      ["para", "Those BADGEs have"],
      ["line", "amazing secrets!"],
      ["prompt"]
    ],
    _CeruleanBadgeHouseMiddleAgedManWhichBadgeText: [
      ["text", "Now then..."],
      ["para", "Which of the 8"],
      ["line", "BADGEs should I"],
      ["cont", "describe?"]
    ],
    _CeruleanBadgeHouseMiddleAgedManVisitAnyTimeText: [
      ["text", "Come visit me any"],
      ["line", "time you wish."]
    ],
    _CeruleanBadgeHouseBoulderBadgeText: [
      ["text", "The ATTACK of all"],
      ["line", "#MON increases"],
      ["cont", "a little bit."],
      ["para", "It also lets you"],
      ["line", "use FLASH any"],
      ["cont", "time you desire."],
      ["prompt"]
    ],
    _CeruleanBadgeHouseCascadeBadgeText: [
      ["text", "#MON up to L30"],
      ["line", "will obey you."],
      ["para", "Any higher, they"],
      ["line", "become unruly!"],
      ["para", "It also lets you"],
      ["line", "use CUT outside"],
      ["cont", "of battle."],
      ["prompt"]
    ],
    _CeruleanBadgeHouseThunderBadgeText: [
      ["text", "The SPEED of all"],
      ["line", "#MON increases"],
      ["cont", "a little bit."],
      ["para", "It also lets you"],
      ["line", "use FLY outside"],
      ["cont", "of battle."],
      ["prompt"]
    ],
    _CeruleanBadgeHouseRainbowBadgeText: [
      ["text", "#MON up to L50"],
      ["line", "will obey you."],
      ["para", "Any higher, they"],
      ["line", "become unruly!"],
      ["para", "It also lets you"],
      ["line", "use STRENGTH out-"],
      ["cont", "side of battle."],
      ["prompt"]
    ],
    _CeruleanBadgeHouseSoulBadgeText: [
      ["text", "The DEFENSE of all"],
      ["line", "#MON increases"],
      ["cont", "a little bit."],
      ["para", "It also lets you"],
      ["line", "use SURF outside"],
      ["cont", "of battle."],
      ["prompt"]
    ],
    _CeruleanBadgeHouseMarshBadgeText: [
      ["text", "#MON up to L70"],
      ["line", "will obey you."],
      ["para", "Any higher, they"],
      ["line", "become unruly!"],
      ["prompt"]
    ],
    _CeruleanBadgeHouseVolcanoBadgeText: [
      ["text", "Your #MON's"],
      ["line", "SPECIAL abilities"],
      ["cont", "increase a bit."],
      ["prompt"]
    ],
    _CeruleanBadgeHouseEarthBadgeText: [
      ["text", "All #MON will"],
      ["line", "obey you!"],
      ["prompt"]
    ]
  }
};
