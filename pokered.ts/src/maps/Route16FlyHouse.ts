import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_FLY_HOUSE_BLOCKS } from "../data/blocks/Route16FlyHouse";
import { OverworldSprite } from "../sprite";

export const Route16FlyHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_16_FLY_HOUSE_BLOCKS,
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
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        movement: "STAY",
        textId: "TEXT_ROUTE16FLYHOUSE_BRUNETTE_GIRL"
      },
      {
        type: "sprite",
        x: 6,
        y: 4,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_BIRD,
        movement: "WALK",
        textId: "TEXT_ROUTE16FLYHOUSE_FEAROW"
      }
    ]
  },
  text: {
    _Route16FlyHouseBrunetteGirlText: [
      ["text", "Oh, you found my"],
      ["line", "secret retreat!"],
      ["para", "Please don't tell"],
      ["line", "anyone I'm here."],
      ["cont", "I'll make it up"],
      ["cont", "to you with this!"],
      ["prompt"]
    ],
    _Route16FlyHouseBrunetteGirlReceivedHM02Text: [
      ["text", "<PLAYER> received"],
      ["line", "HM02!@"],
      ["text_end"]
    ],
    _Route16FlyHouseBrunetteGirlHM02ExplanationText: [
      ["text", "HM02 is FLY."],
      ["line", "It will take you"],
      ["cont", "back to any town."],
      ["para", "Put it to good"],
      ["line", "use!"]
    ],
    _Route16FlyHouseBrunetteGirlHM02NoRoomText: [
      ["text", "You don't have any"],
      ["line", "room for this."]
    ],
    _Route16FlyHouseFearowText: [["text", "FEAROW: Kyueen!"]]
  }
};
