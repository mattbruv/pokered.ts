import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B1F_BLOCKS } from "../data/blocks/SeafoamIslandsB1F";

export const SeafoamIslandsB1F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: SEAFOAM_ISLANDS_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 2, toMap: "SEAFOAM_ISLANDS_B2F", warpId: 1 },
      { x: 7, y: 5, toMap: "SEAFOAM_ISLANDS_1F", warpId: 5 },
      { x: 13, y: 7, toMap: "SEAFOAM_ISLANDS_B2F", warpId: 3 },
      { x: 19, y: 15, toMap: "SEAFOAM_ISLANDS_B2F", warpId: 4 },
      { x: 23, y: 15, toMap: "SEAFOAM_ISLANDS_1F", warpId: 7 },
      { x: 25, y: 11, toMap: "SEAFOAM_ISLANDS_B2F", warpId: 6 },
      { x: 25, y: 3, toMap: "SEAFOAM_ISLANDS_1F", warpId: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 17,
        y: 6,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB1F_BOULDER1"
      },
      {
        type: "sprite",
        x: 22,
        y: 6,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB1F_BOULDER2"
      }
    ]
  },
  textPointers: []
};
