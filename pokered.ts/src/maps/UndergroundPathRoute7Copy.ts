import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_7_BLOCKS } from "../data/blocks/UndergroundPathRoute7Copy";
import { OverworldSprite } from "../sprite";

export const UndergroundPathRoute7Copy: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: UNDERGROUND_PATH_ROUTE_7_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 4, y: 4, toMap: MapName.UndergroundPathWestEast, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE7COPY_UNUSED_GIRL"
      },
      {
        type: "sprite",
        x: 2,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE7COPY_UNUSED_MIDDLE_AGED_MAN"
      }
    ]
  },
  text: {
    _UndergroundPathRoute7CopyUnusedGirlText: [
      ["text", "I want to shop at"],
      ["line", "the dept. store"],
      ["cont", "in CELADON but..."],
      ["para", "There are so many"],
      ["line", "rough looking"],
      ["cont", "people there."]
    ],
    _UndergroundPathRoute7CopyUnusedTeamRocketHadAHideoutText: [
      ["text", "TEAM ROCKET had a"],
      ["line", "secret hideout in"],
      ["cont", "CELADON CITY?"]
    ],
    _UndergroundPathRoute7CopyUnusedMiddleAgedManText: [
      ["text", "You're here to"],
      ["line", "shop in CELADON?"],
      ["para", "Just step outside"],
      ["line", "and head west!"]
    ],
    _UndergroundPathRoute7CopyUnusedGoesUnderSaffronText: [
      ["text", "The UNDERGROUND"],
      ["line", "PATH goes beneath"],
      ["cont", "SAFFRON and leads"],
      ["cont", "to LAVENDER."],
      ["para", "If you're heading"],
      ["line", "to CERULEAN, go"],
      ["cont", "to the building"],
      ["cont", "across the road."]
    ]
  }
};
