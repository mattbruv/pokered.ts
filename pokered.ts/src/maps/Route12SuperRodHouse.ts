import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_SUPER_ROD_HOUSE_BLOCKS } from "../data/blocks/Route12SuperRodHouse";
import { OverworldSprite } from "../sprite";

export const Route12SuperRodHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_12_SUPER_ROD_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 4,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_FISHING_GURU,
        movement: "STAY",
        textId: "TEXT_ROUTE12SUPERRODHOUSE_FISHING_GURU"
      }
    ]
  },
  text: {
    _Route12SuperRodHouseFishingGuruDoYouLikeToFishText: [
      ["text", "I'm the FISHING"],
      ["line", "GURU's brother!"],
      ["para", "I simply Looove"],
      ["line", "fishing!"],
      ["para", "Do you like to"],
      ["line", "fish?"]
    ],
    _Route12SuperRodHouseFishingGuruReceivedSuperRodText: [
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
    _Route12SuperRodHouseFishingGuruFishingWayOfLifeText: [
      ["text_start"],
      ["para", "Fishing is a way"],
      ["line", "of life!"],
      ["para", "From the seas to"],
      ["line", "rivers, go out"],
      ["cont", "and land the big"],
      ["cont", "one!"]
    ],
    _Route12SuperRodHouseFishingGuruThatsDisappointingText: [
      ["text", "Oh... That's so"],
      ["line", "disappointing..."]
    ],
    _Route12SuperRodHouseFishingGuruTryFishingText: [
      ["text", "Hello there,"],
      ["line", "<PLAYER>!"],
      ["para", "Use the SUPER ROD"],
      ["line", "in any water!"],
      ["cont", "You can catch"],
      ["cont", "different kinds"],
      ["cont", "of #MON."],
      ["para", "Try fishing"],
      ["line", "wherever you can!"]
    ],
    _Route12SuperRodHouseFishingGuruNoRoomText: [
      ["text", "Oh no!"],
      ["para", "I had a gift for"],
      ["line", "you, but you have"],
      ["cont", "no room for it!"]
    ]
  }
};
