import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_PIDGEY_HOUSE_BLOCKS } from "../data/blocks/VermilionPidgeyHouse";
import { OverworldSprite } from "../sprite";

export const VermilionPidgeyHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: VERMILION_PIDGEY_HOUSE_BLOCKS,
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
        x: 5,
        y: 3,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_VERMILIONPIDGEYHOUSE_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 3,
        y: 5,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_BIRD,
        movement: "WALK",
        textId: "TEXT_VERMILIONPIDGEYHOUSE_PIDGEY"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_PAPER,
        movement: "STAY",
        textId: "TEXT_VERMILIONPIDGEYHOUSE_LETTER"
      }
    ]
  },
  text: {
    _VermilionPidgeyHouseYoungsterText: [
      ["text", "I'm getting my"],
      ["line", "PIDGEY to fly a"],
      ["cont", "letter to SAFFRON"],
      ["cont", "in the north!"]
    ],
    _VermilionPidgeyHousePidgeyText: [
      ["text", "PIDGEY: Kurukkoo!@"],
      ["text_end"]
    ],
    _VermilionPidgeyHouseLetterText: [
      ["text", "Dear PIPPI, I hope"],
      ["line", "to see you soon."],
      ["para", "I heard SAFFRON"],
      ["line", "has problems with"],
      ["cont", "TEAM ROCKET."],
      ["para", "VERMILION appears"],
      ["line", "to be safe."]
    ]
  }
};
