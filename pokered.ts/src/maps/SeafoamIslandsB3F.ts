import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B3F_BLOCKS } from "../data/blocks/SeafoamIslandsB3F";

export const SeafoamIslandsB3F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: SEAFOAM_ISLANDS_B3F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 12, toMap: "SEAFOAM_ISLANDS_B2F", warpId: 2 },
      { x: 8, y: 6, toMap: "SEAFOAM_ISLANDS_B4F", warpId: 3 },
      { x: 25, y: 4, toMap: "SEAFOAM_ISLANDS_B4F", warpId: 4 },
      { x: 25, y: 3, toMap: "SEAFOAM_ISLANDS_B2F", warpId: 5 },
      { x: 25, y: 14, toMap: "SEAFOAM_ISLANDS_B2F", warpId: 7 },
      { x: 20, y: 17, toMap: "SEAFOAM_ISLANDS_B4F", warpId: 1 },
      { x: 21, y: 17, toMap: "SEAFOAM_ISLANDS_B4F", warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 14,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER1"
      },
      {
        type: "sprite",
        x: 3,
        y: 15,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER2"
      },
      {
        type: "sprite",
        x: 8,
        y: 14,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER3"
      },
      {
        type: "sprite",
        x: 9,
        y: 14,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER4"
      },
      {
        type: "sprite",
        x: 18,
        y: 6,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER5"
      },
      {
        type: "sprite",
        x: 19,
        y: 6,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER6"
      }
    ]
  },
  textPointers: []
};
