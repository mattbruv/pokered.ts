import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_22_GATE_BLOCKS } from "../data/blocks/Route22Gate";

export const Route22Gate: Map = {
  width: 5,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_22_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 4, y: 0, toMap: "LAST_MAP", warpId: 1 },
      { x: 5, y: 0, toMap: "LAST_MAP", warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 2,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE22GATE_GUARD"
      }
    ]
  },
  textPointers: []
};
