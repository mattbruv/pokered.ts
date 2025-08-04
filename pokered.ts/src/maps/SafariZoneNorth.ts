import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_NORTH_BLOCKS } from "../data/blocks/SafariZoneNorth";
import { OverworldSprite } from "../sprite";

export const SafariZoneNorth: Map = {
  width: 20,
  height: 18,
  borderBlock: 0,
  blocks: SAFARI_ZONE_NORTH_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 35, toMap: MapName.SafariZoneWest, warpIndex: 0 },
      { x: 3, y: 35, toMap: MapName.SafariZoneWest, warpIndex: 1 },
      { x: 8, y: 35, toMap: MapName.SafariZoneWest, warpIndex: 2 },
      { x: 9, y: 35, toMap: MapName.SafariZoneWest, warpIndex: 3 },
      { x: 20, y: 35, toMap: MapName.SafariZoneCenter, warpIndex: 4 },
      { x: 21, y: 35, toMap: MapName.SafariZoneCenter, warpIndex: 5 },
      { x: 39, y: 30, toMap: MapName.SafariZoneEast, warpIndex: 0 },
      { x: 39, y: 31, toMap: MapName.SafariZoneEast, warpIndex: 1 },
      { x: 35, y: 3, toMap: MapName.SafariZoneNorthRestHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 36, y: 4, signId: "TEXT_SAFARIZONENORTH_REST_HOUSE_SIGN" },
      { x: 4, y: 25, signId: "TEXT_SAFARIZONENORTH_TRAINER_TIPS_1" },
      { x: 13, y: 31, signId: "TEXT_SAFARIZONENORTH_SIGN" },
      { x: 19, y: 33, signId: "TEXT_SAFARIZONENORTH_TRAINER_TIPS_2" },
      { x: 26, y: 28, signId: "TEXT_SAFARIZONENORTH_TRAINER_TIPS_3" }
    ],
    objects: [
      {
        type: "item",
        x: 25,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SAFARIZONENORTH_PROTEIN",
        itemId: "PROTEIN"
      },
      {
        type: "item",
        x: 19,
        y: 7,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SAFARIZONENORTH_TM_SKULL_BASH",
        itemId: "TM_SKULL_BASH"
      }
    ]
  },
  text: {
    _SafariZoneNorthRestHouseSignText: [["text", "REST HOUSE"]],
    _SafariZoneNorthTrainerTips1Text: [
      ["text", "TRAINER TIPS"],
      ["para", "The SECRET HOUSE"],
      ["line", "is still ahead!"]
    ],
    _SafariZoneNorthSignText: [["text", "AREA 2"]],
    _SafariZoneNorthTrainerTips2Text: [
      ["text", "TRAINER TIPS"],
      ["para", "#MON hide in"],
      ["line", "tall grass!"],
      ["para", "Zigzag through"],
      ["line", "grassy areas to"],
      ["cont", "flush them out."]
    ],
    _SafariZoneNorthTrainerTips3Text: [
      ["text", "TRAINER TIPS"],
      ["para", "Win a free HM for"],
      ["line", "finding the"],
      ["cont", "SECRET HOUSE!"]
    ]
  }
};
