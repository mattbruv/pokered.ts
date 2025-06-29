import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_7_GATE_BLOCKS } from "../data/blocks/Route7Gate";

export const Route7Gate: Map = {
  width: 3,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_7_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 3, toMap: "LAST_MAP", warpId: 4 },
      { x: 0, y: 4, toMap: "LAST_MAP", warpId: 4 },
      { x: 5, y: 3, toMap: "LAST_MAP", warpId: 1 },
      { x: 5, y: 4, toMap: "LAST_MAP", warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE7GATE_GUARD"
      }
    ]
  },
  textPointers: []
};
