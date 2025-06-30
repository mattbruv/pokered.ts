import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_6_GATE_BLOCKS } from "../data/blocks/Route6Gate";

export const Route6Gate: Map = {
  width: 4,
  height: 3,
  borderBlock: 10,
  blocks: ROUTE_6_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 5, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 4, y: 5, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 3, y: 0, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 4, y: 0, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 2,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE6GATE_GUARD"
      }
    ]
  },
  textPointers: []
};
