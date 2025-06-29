import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { WARDENS_HOUSE_BLOCKS } from "../data/blocks/WardensHouse";

export const WardensHouse: Map = {
  width: 5,
  height: 4,
  borderBlock: 23,
  blocks: WARDENS_HOUSE_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 4 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpId: 4 }
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
        sprite: "SPRITE_WARDEN",
        movement: "STAY",
        textId: "TEXT_WARDENSHOUSE_WARDEN"
      },
      {
        type: "item",
        x: 8,
        y: 3,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_WARDENSHOUSE_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "sprite",
        x: 8,
        y: 4,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_WARDENSHOUSE_BOULDER"
      }
    ]
  },
  textPointers: []
};
