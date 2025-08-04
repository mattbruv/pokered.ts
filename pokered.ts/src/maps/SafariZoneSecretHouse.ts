import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_SECRET_HOUSE_BLOCKS } from "../data/blocks/SafariZoneSecretHouse";
import { OverworldSprite } from "../sprite";

export const SafariZoneSecretHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 23,
  blocks: SAFARI_ZONE_SECRET_HOUSE_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: MapName.SafariZoneWest, warpIndex: 6 },
      { x: 3, y: 7, toMap: MapName.SafariZoneWest, warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_FISHING_GURU,
        movement: "STAY",
        textId: "TEXT_SAFARIZONESECRETHOUSE_FISHING_GURU"
      }
    ]
  },
  text: {
    _SafariZoneSecretHouseFishingGuruYouHaveWonText: [
      ["text", "Ah! Finally!"],
      ["para", "You're the first"],
      ["line", "person to reach"],
      ["cont", "the SECRET HOUSE!"],
      ["para", "I was getting"],
      ["line", "worried that no"],
      ["cont", "one would win our"],
      ["cont", "campaign prize."],
      ["para", "Congratulations!"],
      ["line", "You have won!"],
      ["prompt"]
    ],
    _SafariZoneSecretHouseFishingGuruReceivedHM03Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _SafariZoneSecretHouseFishingGuruHM03ExplanationText: [
      ["text", "HM03 is SURF!"],
      ["para", "#MON will be"],
      ["line", "able to ferry you"],
      ["cont", "across water!"],
      ["para", "And, this HM isn't"],
      ["line", "disposable! You"],
      ["cont", "can use it over"],
      ["cont", "and over!"],
      ["para", "You're super lucky"],
      ["line", "for winning this"],
      ["cont", "fabulous prize!"]
    ],
    _SafariZoneSecretHouseFishingGuruHM03NoRoomText: [
      ["text", "You don't have"],
      ["line", "room for this"],
      ["cont", "fabulous prize!"]
    ]
  }
};
