import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_MART_BLOCKS } from "../data/blocks/VermilionMart";

export const VermilionMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: VERMILION_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_VERMILIONMART_CLERK"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_VERMILIONMART_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 3,
        y: 3,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "WALK",
        textId: "TEXT_VERMILIONMART_COOLTRAINER_F"
      }
    ]
  },
  textPointers: []
};
