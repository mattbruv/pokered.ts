import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_1F_BLOCKS } from "../data/blocks/SeafoamIslands1F";

export const SeafoamIslands1F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: SEAFOAM_ISLANDS_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 17, toMap: "LAST_MAP", warpId: 1 },
      { x: 5, y: 17, toMap: "LAST_MAP", warpId: 1 },
      { x: 26, y: 17, toMap: "LAST_MAP", warpId: 2 },
      { x: 27, y: 17, toMap: "LAST_MAP", warpId: 2 },
      { x: 7, y: 5, toMap: "SEAFOAM_ISLANDS_B1F", warpId: 2 },
      { x: 25, y: 3, toMap: "SEAFOAM_ISLANDS_B1F", warpId: 7 },
      { x: 23, y: 15, toMap: "SEAFOAM_ISLANDS_B1F", warpId: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 18,
        y: 10,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDS1F_BOULDER1"
      },
      {
        type: "sprite",
        x: 26,
        y: 7,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDS1F_BOULDER2"
      }
    ]
  },
  textPointers: []
};
