import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_GATE_1F_BLOCKS } from "../data/blocks/Route16Gate1F";

export const Route16Gate1F: Map = {
  width: 4,
  height: 7,
  borderBlock: 10,
  blocks: ROUTE_16_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 8, toMap: "LAST_MAP", warpId: 1 },
      { x: 0, y: 9, toMap: "LAST_MAP", warpId: 2 },
      { x: 7, y: 8, toMap: "LAST_MAP", warpId: 3 },
      { x: 7, y: 9, toMap: "LAST_MAP", warpId: 3 },
      { x: 0, y: 2, toMap: "LAST_MAP", warpId: 5 },
      { x: 0, y: 3, toMap: "LAST_MAP", warpId: 6 },
      { x: 7, y: 2, toMap: "LAST_MAP", warpId: 7 },
      { x: 7, y: 3, toMap: "LAST_MAP", warpId: 8 },
      { x: 6, y: 12, toMap: "ROUTE_16_GATE_2F", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 5,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE16GATE1F_GUARD"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        sprite: "SPRITE_GAMBLER",
        movement: "STAY",
        textId: "TEXT_ROUTE16GATE1F_GAMBLER"
      }
    ]
  },
  textPointers: []
};
