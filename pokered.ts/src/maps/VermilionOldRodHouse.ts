import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_OLD_ROD_HOUSE_BLOCKS } from "../data/blocks/VermilionOldRodHouse";
import { OverworldSprite } from "../sprite";

export const VermilionOldRodHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: VERMILION_OLD_ROD_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 8 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 8 }
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
        textId: "TEXT_VERMILIONOLDRODHOUSE_FISHING_GURU"
      }
    ]
  },
  text: {
    _VermilionOldRodHouseFishingGuruDoYouLikeToFishText: [
      ["text", "I'm the FISHING"],
      ["line", "GURU!"],
      ["para", "I simply Looove"],
      ["line", "fishing!"],
      ["para", "Do you like to"],
      ["line", "fish?"]
    ],
    _VermilionOldRodHouseFishingGuruTakeThisText: [
      ["text", "Grand! I like"],
      ["line", "your style!"],
      ["para", "Take this and"],
      ["line", "fish, young one!"],
      ["para", "<PLAYER> received"],
      ["line", "an @"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _VermilionOldRodHouseFishingGuruFishingIsAWayOfLifeText: [
      ["text_start"],
      ["para", "Fishing is a way"],
      ["line", "of life!"],
      ["para", "From the seas to"],
      ["line", "rivers, go out"],
      ["cont", "and land the big"],
      ["cont", "one, young one!"]
    ],
    _VermilionOldRodHouseFishingGuruThatsSoDisappointingText: [
      ["text", "Oh... That's so"],
      ["line", "disappointing..."]
    ],
    _VermilionOldRodHouseFishingGuruHowAreTheFishBitingText: [
      ["text", "Hello there,"],
      ["line", "<PLAYER>!"],
      ["para", "How are the fish"],
      ["line", "biting?"]
    ],
    _VermilionOldRodHouseFishingGuruNoRoomText: [
      ["text", "Oh no!"],
      ["para", "You have no room"],
      ["line", "for my gift!"]
    ]
  }
};
