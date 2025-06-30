import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_8_GATE_BLOCKS } from "../data/blocks/Route8Gate";

export const Route8Gate: Map = {
  width: 3,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_8_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 3, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 0, y: 4, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 5, y: 3, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 5, y: 4, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 1,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE8GATE_GUARD"
      }
    ]
  },
  textPointers: []
};
