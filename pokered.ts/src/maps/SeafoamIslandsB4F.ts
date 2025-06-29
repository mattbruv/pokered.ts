import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B4F_BLOCKS } from "../data/blocks/SeafoamIslandsB4F";

export const SeafoamIslandsB4F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: SEAFOAM_ISLANDS_B4F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 20, y: 17, toMap: "SEAFOAM_ISLANDS_B3F", warpId: 6 },
      { x: 21, y: 17, toMap: "SEAFOAM_ISLANDS_B3F", warpId: 7 },
      { x: 11, y: 7, toMap: "SEAFOAM_ISLANDS_B3F", warpId: 2 },
      { x: 25, y: 4, toMap: "SEAFOAM_ISLANDS_B3F", warpId: 3 }
    ],
    backgroundItems: [
      { x: 9, y: 15, signId: "TEXT_SEAFOAMISLANDSB4F_BOULDERS_SIGN" },
      { x: 23, y: 1, signId: "TEXT_SEAFOAMISLANDSB4F_DANGER_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 15,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB4F_BOULDER1"
      },
      {
        type: "sprite",
        x: 5,
        y: 15,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB4F_BOULDER2"
      },
      {
        type: "trainer",
        x: 6,
        y: 1,
        sprite: "SPRITE_BIRD",
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB4F_ARTICUNO",
        trainerId: "ARTICUNO",
        trainerLevel: 50
      }
    ]
  },
  textPointers: []
};
