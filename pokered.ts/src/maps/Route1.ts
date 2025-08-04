import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_1_BLOCKS } from "../data/blocks/Route1";
import { OverworldSprite } from "../sprite";

export const Route1: Map = {
  width: 10,
  height: 18,
  borderBlock: 11,
  blocks: ROUTE_1_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.ViridianCity, xOffset: -5 },
    south: { map: MapName.PalletTown, xOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 9, y: 27, signId: "TEXT_ROUTE1_SIGN" }],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 24,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_ROUTE1_YOUNGSTER1"
      },
      {
        type: "sprite",
        x: 15,
        y: 13,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_ROUTE1_YOUNGSTER2"
      }
    ]
  },
  text: {
    _Route1Youngster1MartSampleText: [
      ["text", "Hi! I work at a"],
      ["line", "#MON MART."],
      ["para", "It's a convenient"],
      ["line", "shop, so please"],
      ["cont", "visit us in"],
      ["cont", "VIRIDIAN CITY."],
      ["para", "I know, I'll give"],
      ["line", "you a sample!"],
      ["cont", "Here you go!"],
      ["prompt"]
    ],
    _Route1Youngster1GotPotionText: [
      ["text", "<PLAYER> got"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _Route1Youngster1AlsoGotPokeballsText: [
      ["text", "We also carry"],
      ["line", "# BALLs for"],
      ["cont", "catching #MON!"]
    ],
    _Route1Youngster1NoRoomText: [
      ["text", "You have too much"],
      ["line", "stuff with you!"]
    ],
    _Route1Youngster2Text: [
      ["text", "See those ledges"],
      ["line", "along the road?"],
      ["para", "It's a bit scary,"],
      ["line", "but you can jump"],
      ["cont", "from them."],
      ["para", "You can get back"],
      ["line", "to PALLET TOWN"],
      ["cont", "quicker that way."]
    ],
    _Route1SignText: [
      ["text", "ROUTE 1"],
      ["line", "PALLET TOWN -"],
      ["cont", "VIRIDIAN CITY"]
    ]
  }
};
