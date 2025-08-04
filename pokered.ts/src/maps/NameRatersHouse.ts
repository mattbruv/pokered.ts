import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { NAME_RATERS_HOUSE_BLOCKS } from "../data/blocks/NameRatersHouse";
import { OverworldSprite } from "../sprite";

export const NameRatersHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: NAME_RATERS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_SILPH_PRESIDENT,
        movement: "STAY",
        textId: "TEXT_NAMERATERSHOUSE_NAME_RATER"
      }
    ]
  },
  text: {
    _NameRatersHouseNameRaterWantMeToRateText: [
      ["text", "Hello, hello!"],
      ["line", "I am the official"],
      ["cont", "NAME RATER!"],
      ["para", "Want me to rate"],
      ["line", "the nicknames of"],
      ["cont", "your #MON?"]
    ],
    _NameRatersHouseNameRaterWhichPokemonText: [
      ["text", "Which #MON"],
      ["line", "should I look at?"],
      ["prompt"]
    ],
    _NameRatersHouseNameRaterGiveItANiceNameText: [
      ["text_ram", "wNameBuffer"],
      ["text", ", is it?"],
      ["line", "That is a decent"],
      ["cont", "nickname!"],
      ["para", "But, would you"],
      ["line", "like me to give"],
      ["cont", "it a nicer name?"],
      ["para", "How about it?"]
    ],
    _NameRatersHouseNameRaterWhatShouldWeNameItText: [
      ["text", "Fine! What should"],
      ["line", "we name it?"],
      ["prompt"]
    ],
    _NameRatersHouseNameRaterPokemonHasBeenRenamedText: [
      ["text", "OK! This #MON"],
      ["line", "has been renamed"],
      ["cont", "@"],
      ["text_ram", "wBuffer"],
      ["text", "!"],
      ["para", "That's a better"],
      ["line", "name than before!"]
    ],
    _NameRatersHouseNameRaterComeAnyTimeYouLikeText: [
      ["text", "Fine! Come any"],
      ["line", "time you like!"]
    ],
    _NameRatersHouseNameRaterATrulyImpeccableNameText: [
      ["text_ram", "wNameBuffer"],
      ["text", ", is it?"],
      ["line", "That is a truly"],
      ["cont", "impeccable name!"],
      ["para", "Take good care of"],
      ["line", "@"],
      ["text_ram", "wNameBuffer"],
      ["text", "!"]
    ]
  }
};
