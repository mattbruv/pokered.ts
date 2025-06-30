import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CAVE_2F_BLOCKS } from "../data/blocks/CeruleanCave2F";

export const CeruleanCave2F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: CERULEAN_CAVE_2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 29, y: 1, toMap: MapName.CeruleanCave1F, warpId: 3 },
      { x: 22, y: 6, toMap: MapName.CeruleanCave1F, warpId: 4 },
      { x: 19, y: 7, toMap: MapName.CeruleanCave1F, warpId: 5 },
      { x: 9, y: 1, toMap: MapName.CeruleanCave1F, warpId: 6 },
      { x: 1, y: 3, toMap: MapName.CeruleanCave1F, warpId: 7 },
      { x: 3, y: 11, toMap: MapName.CeruleanCave1F, warpId: 8 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "item",
        x: 29,
        y: 9,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_CERULEANCAVE2F_PP_UP",
        itemId: "PP_UP"
      },
      {
        type: "item",
        x: 4,
        y: 15,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_CERULEANCAVE2F_ULTRA_BALL",
        itemId: "ULTRA_BALL"
      },
      {
        type: "item",
        x: 13,
        y: 6,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_CERULEANCAVE2F_FULL_RESTORE",
        itemId: "FULL_RESTORE"
      }
    ]
  },
  textPointers: []
};
