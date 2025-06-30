import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_11_GATE_1F_BLOCKS } from "../data/blocks/Route11Gate1F";

export const Route11Gate1F: Map = {
  width: 4,
  height: 5,
  borderBlock: 10,
  blocks: ROUTE_11_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 4, toMap: "LAST_MAP", warpId: 1 },
      { x: 0, y: 5, toMap: "LAST_MAP", warpId: 2 },
      { x: 7, y: 4, toMap: "LAST_MAP", warpId: 3 },
      { x: 7, y: 5, toMap: "LAST_MAP", warpId: 4 },
      { x: 6, y: 8, toMap: MapName.Route11Gate2F, warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 1,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE11GATE1F_GUARD"
      }
    ]
  },
  textPointers: []
};
