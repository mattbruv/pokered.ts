import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { WARDENS_HOUSE_BLOCKS } from "../data/blocks/WardensHouse";
import { OverworldSprite } from "../sprite";

export const WardensHouse: Map = {
  width: 5,
  height: 4,
  borderBlock: 23,
  blocks: WARDENS_HOUSE_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [
      { x: 4, y: 3, signId: "TEXT_WARDENSHOUSE_DISPLAY_LEFT" },
      { x: 5, y: 3, signId: "TEXT_WARDENSHOUSE_DISPLAY_RIGHT" }
    ],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: OverworldSprite.SPRITE_WARDEN,
        movement: "STAY",
        textId: "TEXT_WARDENSHOUSE_WARDEN"
      },
      {
        type: "item",
        x: 8,
        y: 3,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_WARDENSHOUSE_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "sprite",
        x: 8,
        y: 4,
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_WARDENSHOUSE_BOULDER"
      }
    ]
  },
  textPointers: []
};
