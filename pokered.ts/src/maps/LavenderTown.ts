import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_TOWN_BLOCKS } from "../data/blocks/LavenderTown";

export const LavenderTown: Map = {
  width: 10,
  height: 9,
  borderBlock: 44,
  blocks: LAVENDER_TOWN_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route10, yOffset: 0 },
    south: { map: MapName.Route12, yOffset: 0 },
    west: { map: MapName.Route8, xOffset: 0 }
  },
  objects: {
    warps: [
      { x: 3, y: 5, toMap: "LAVENDER_POKECENTER", warpId: 1 },
      { x: 14, y: 5, toMap: "POKEMON_TOWER_1F", warpId: 1 },
      { x: 7, y: 9, toMap: "MR_FUJIS_HOUSE", warpId: 1 },
      { x: 15, y: 13, toMap: "LAVENDER_MART", warpId: 1 },
      { x: 3, y: 13, toMap: "LAVENDER_CUBONE_HOUSE", warpId: 1 },
      { x: 7, y: 13, toMap: "NAME_RATERS_HOUSE", warpId: 1 }
    ],
    backgroundItems: [
      { x: 11, y: 9, signId: "TEXT_LAVENDERTOWN_SIGN" },
      { x: 9, y: 3, signId: "TEXT_LAVENDERTOWN_SILPH_SCOPE_SIGN" },
      { x: 16, y: 13, signId: "TEXT_LAVENDERTOWN_MART_SIGN" },
      { x: 4, y: 5, signId: "TEXT_LAVENDERTOWN_POKECENTER_SIGN" },
      { x: 5, y: 9, signId: "TEXT_LAVENDERTOWN_POKEMON_HOUSE_SIGN" },
      { x: 17, y: 7, signId: "TEXT_LAVENDERTOWN_POKEMON_TOWER_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 15,
        y: 9,
        sprite: "SPRITE_LITTLE_GIRL",
        movement: "WALK",
        textId: "TEXT_LAVENDERTOWN_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 9,
        y: 10,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_LAVENDERTOWN_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 8,
        y: 7,
        sprite: "SPRITE_SUPER_NERD",
        movement: "WALK",
        textId: "TEXT_LAVENDERTOWN_SUPER_NERD"
      }
    ]
  },
  textPointers: []
};
