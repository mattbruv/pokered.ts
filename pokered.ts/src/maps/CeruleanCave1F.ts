import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CAVE_1F_BLOCKS } from "../data/blocks/CeruleanCave1F";
import { OverworldSprite } from "../sprite";

export const CeruleanCave1F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: CERULEAN_CAVE_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 24, y: 17, toMap: "LAST_MAP", warpIndex: 6 },
      { x: 25, y: 17, toMap: "LAST_MAP", warpIndex: 6 },
      { x: 27, y: 1, toMap: MapName.CeruleanCave2F, warpIndex: 0 },
      { x: 23, y: 7, toMap: MapName.CeruleanCave2F, warpIndex: 1 },
      { x: 18, y: 9, toMap: MapName.CeruleanCave2F, warpIndex: 2 },
      { x: 7, y: 1, toMap: MapName.CeruleanCave2F, warpIndex: 3 },
      { x: 1, y: 3, toMap: MapName.CeruleanCave2F, warpIndex: 4 },
      { x: 3, y: 11, toMap: MapName.CeruleanCave2F, warpIndex: 5 },
      { x: 0, y: 6, toMap: MapName.CeruleanCaveB1F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "item",
        x: 7,
        y: 13,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_CERULEANCAVE1F_FULL_RESTORE",
        itemId: "FULL_RESTORE"
      },
      {
        type: "item",
        x: 19,
        y: 3,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_CERULEANCAVE1F_MAX_ELIXER",
        itemId: "MAX_ELIXER"
      },
      {
        type: "item",
        x: 5,
        y: 0,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_CERULEANCAVE1F_NUGGET",
        itemId: "NUGGET"
      }
    ]
  },
  textPointers: []
};
