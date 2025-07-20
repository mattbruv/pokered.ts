import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_BADGE_HOUSE_BLOCKS } from "../data/blocks/CeruleanBadgeHouse";
import { OverworldSprite } from "../sprite";

export const CeruleanBadgeHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 12,
  blocks: CERULEAN_BADGE_HOUSE_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 0, toMap: "LAST_MAP", warpIndex: 9 },
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 8 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 8 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_CERULEANBADGEHOUSE_MIDDLE_AGED_MAN"
      }
    ]
  },
  textPointers: []
};
