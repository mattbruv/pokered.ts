import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CAVE_1F_BLOCKS } from "../data/blocks/CeruleanCave1F";

export const CeruleanCave1F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: CERULEAN_CAVE_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 24, y: 17, toMap: "LAST_MAP", warpId: 7 },
      { x: 25, y: 17, toMap: "LAST_MAP", warpId: 7 },
      { x: 27, y: 1, toMap: "CERULEAN_CAVE_2F", warpId: 1 },
      { x: 23, y: 7, toMap: "CERULEAN_CAVE_2F", warpId: 2 },
      { x: 18, y: 9, toMap: "CERULEAN_CAVE_2F", warpId: 3 },
      { x: 7, y: 1, toMap: "CERULEAN_CAVE_2F", warpId: 4 },
      { x: 1, y: 3, toMap: "CERULEAN_CAVE_2F", warpId: 5 },
      { x: 3, y: 11, toMap: "CERULEAN_CAVE_2F", warpId: 6 },
      { x: 0, y: 6, toMap: "CERULEAN_CAVE_B1F", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "item",
        x: 7,
        y: 13,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_CERULEANCAVE1F_FULL_RESTORE",
        itemId: "FULL_RESTORE"
      },
      {
        type: "item",
        x: 19,
        y: 3,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_CERULEANCAVE1F_MAX_ELIXER",
        itemId: "MAX_ELIXER"
      },
      {
        type: "item",
        x: 5,
        y: 0,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_CERULEANCAVE1F_NUGGET",
        itemId: "NUGGET"
      }
    ]
  },
  textPointers: []
};
