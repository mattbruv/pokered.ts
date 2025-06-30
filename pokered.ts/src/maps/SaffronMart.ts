import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_MART_BLOCKS } from "../data/blocks/SaffronMart";

export const SaffronMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: SAFFRON_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_SAFFRONMART_CLERK"
      },
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_SAFFRONMART_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 6,
        y: 5,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "WALK",
        textId: "TEXT_SAFFRONMART_COOLTRAINER_F"
      }
    ]
  },
  textPointers: []
};
