import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_4_BLOCKS } from "../data/blocks/Route4";
import { OverworldSprite } from "../sprite";

export const Route4: Map = {
  width: 45,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_4_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.Route3, xOffset: -25 },
    east: { map: MapName.CeruleanCity, yOffset: -4 }
  },
  objects: {
    warps: [
      { x: 11, y: 5, toMap: MapName.MtMoonPokecenter, warpIndex: 0 },
      { x: 18, y: 5, toMap: MapName.MtMoon1F, warpIndex: 0 },
      { x: 24, y: 5, toMap: MapName.MtMoonB1F, warpIndex: 7 }
    ],
    backgroundItems: [
      { x: 12, y: 5, signId: "TEXT_ROUTE4_POKECENTER_SIGN" },
      { x: 17, y: 7, signId: "TEXT_ROUTE4_MT_MOON_SIGN" },
      { x: 27, y: 7, signId: "TEXT_ROUTE4_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 9,
        y: 8,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "WALK",
        textId: "TEXT_ROUTE4_COOLTRAINER_F1"
      },
      {
        type: "trainer",
        x: 63,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE4_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 4
      },
      {
        type: "item",
        x: 57,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE4_TM_WHIRLWIND",
        itemId: "TM_WHIRLWIND"
      }
    ]
  },
  text: {
    _Route4CooltrainerF1Text: [
      ["text", "Ouch! I tripped"],
      ["line", "over a rocky"],
      ["cont", "#MON, GEODUDE!"]
    ],
    _Route4CooltrainerF2BattleText: [
      ["text", "I came to get my"],
      ["line", "mushroom #MON!"]
    ],
    _Route4CooltrainerF2EndBattleText: [
      ["text", "Oh! My cute"],
      ["line", "mushroom #MON!"],
      ["prompt"]
    ],
    _Route4CooltrainerF2AfterBattleText: [
      ["text", "There might not"],
      ["line", "be any more"],
      ["cont", "mushrooms here."],
      ["para", "I think I got"],
      ["line", "them all."]
    ],
    _Route4MtMoonSignText: [
      ["text", "MT.MOON"],
      ["line", "Tunnel Entrance"]
    ],
    _Route4SignText: [
      ["text", "ROUTE 4"],
      ["line", "MT.MOON -"],
      ["cont", "CERULEAN CITY"]
    ]
  }
};
