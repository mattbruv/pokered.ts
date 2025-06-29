import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_NORTH_BLOCKS } from "../data/blocks/SafariZoneNorth";

export const SafariZoneNorth: Map = {
  width: 20,
  height: 18,
  borderBlock: 0,
  blocks: SAFARI_ZONE_NORTH_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 35, toMap: "SAFARI_ZONE_WEST", warpId: 1 },
      { x: 3, y: 35, toMap: "SAFARI_ZONE_WEST", warpId: 2 },
      { x: 8, y: 35, toMap: "SAFARI_ZONE_WEST", warpId: 3 },
      { x: 9, y: 35, toMap: "SAFARI_ZONE_WEST", warpId: 4 },
      { x: 20, y: 35, toMap: "SAFARI_ZONE_CENTER", warpId: 5 },
      { x: 21, y: 35, toMap: "SAFARI_ZONE_CENTER", warpId: 6 },
      { x: 39, y: 30, toMap: "SAFARI_ZONE_EAST", warpId: 1 },
      { x: 39, y: 31, toMap: "SAFARI_ZONE_EAST", warpId: 2 },
      { x: 35, y: 3, toMap: "SAFARI_ZONE_NORTH_REST_HOUSE", warpId: 1 }
    ],
    backgroundItems: [
      { x: 36, y: 4, signId: "TEXT_SAFARIZONENORTH_REST_HOUSE_SIGN" },
      { x: 4, y: 25, signId: "TEXT_SAFARIZONENORTH_TRAINER_TIPS_1" },
      { x: 13, y: 31, signId: "TEXT_SAFARIZONENORTH_SIGN" },
      { x: 19, y: 33, signId: "TEXT_SAFARIZONENORTH_TRAINER_TIPS_2" },
      { x: 26, y: 28, signId: "TEXT_SAFARIZONENORTH_TRAINER_TIPS_3" }
    ],
    objects: [
      {
        type: "item",
        x: 25,
        y: 1,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONENORTH_PROTEIN",
        itemId: "PROTEIN"
      },
      {
        type: "item",
        x: 19,
        y: 7,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONENORTH_TM_SKULL_BASH",
        itemId: "TM_SKULL_BASH"
      }
    ]
  },
  textPointers: []
};
