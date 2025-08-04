import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_TRASHED_HOUSE_BLOCKS } from "../data/blocks/CeruleanTrashedHouse";
import { OverworldSprite } from "../sprite";

export const CeruleanTrashedHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: CERULEAN_TRASHED_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 0, toMap: "LAST_MAP", warpIndex: 7 }
    ],
    backgroundItems: [
      { x: 3, y: 0, signId: "TEXT_CERULEANTRASHEDHOUSE_WALL_HOLE" }
    ],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_FISHING_GURU,
        movement: "STAY",
        textId: "TEXT_CERULEANTRASHEDHOUSE_FISHING_GURU"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_CERULEANTRASHEDHOUSE_GIRL"
      }
    ]
  },
  text: {
    _CeruleanTrashedHouseFishingGuruTheyStoleATMText: [
      ["text", "Those miserable"],
      ["line", "ROCKETs!"],
      ["para", "Look what they"],
      ["line", "did here!"],
      ["para", "They stole a TM"],
      ["line", "for teaching"],
      ["cont", "#MON how to"],
      ["cont", "DIG holes!"],
      ["para", "That cost me a"],
      ["line", "bundle, it did!"]
    ],
    _CeruleanTrashedHouseFishingGuruWhatsLostIsLostText: [
      ["text", "I figure what's"],
      ["line", "lost is lost!"],
      ["para", "I decided to teach"],
      ["line", "DIGLETT how to"],
      ["cont", "DIG without a TM!"]
    ],
    _CeruleanTrashedHouseGirlText: [
      ["text", "TEAM ROCKET must"],
      ["line", "be trying to DIG"],
      ["cont", "their way into no"],
      ["cont", "good!"]
    ],
    _CeruleanTrashedHouseWallHoleText: [
      ["text", "TEAM ROCKET left"],
      ["line", "a way out!"]
    ]
  }
};
