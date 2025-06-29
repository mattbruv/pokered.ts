import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B2F_BLOCKS } from "../data/blocks/SeafoamIslandsB2F";

export const SeafoamIslandsB2F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: SEAFOAM_ISLANDS_B2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 3, toMap: "SEAFOAM_ISLANDS_B1F", warpId: 1 },
      { x: 5, y: 13, toMap: "SEAFOAM_ISLANDS_B3F", warpId: 1 },
      { x: 13, y: 7, toMap: "SEAFOAM_ISLANDS_B1F", warpId: 3 },
      { x: 19, y: 15, toMap: "SEAFOAM_ISLANDS_B1F", warpId: 4 },
      { x: 25, y: 3, toMap: "SEAFOAM_ISLANDS_B3F", warpId: 4 },
      { x: 25, y: 11, toMap: "SEAFOAM_ISLANDS_B1F", warpId: 6 },
      { x: 25, y: 14, toMap: "SEAFOAM_ISLANDS_B3F", warpId: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 18,
        y: 6,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB2F_BOULDER1"
      },
      {
        type: "sprite",
        x: 23,
        y: 6,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB2F_BOULDER2"
      }
    ]
  },
  textPointers: []
};
