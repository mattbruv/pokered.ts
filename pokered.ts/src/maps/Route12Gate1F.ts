import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_GATE_1F_BLOCKS } from "../data/blocks/Route12Gate1F";

export const Route12Gate1F: Map = {
  width: 5,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_12_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 0, toMap: "LAST_MAP", warpId: 1 },
      { x: 5, y: 0, toMap: "LAST_MAP", warpId: 2 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 3 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpId: 3 },
      { x: 8, y: 6, toMap: MapName.Route12Gate2F, warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 3,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE12GATE1F_GUARD"
      }
    ]
  },
  textPointers: []
};
