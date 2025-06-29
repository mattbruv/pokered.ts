import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_18_GATE_2F_BLOCKS } from "../data/blocks/Route18Gate2F";

export const Route18Gate2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_18_GATE_2F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 7, toMap: "ROUTE_18_GATE_1F", warpId: 5 }],
    backgroundItems: [
      { x: 1, y: 2, signId: "TEXT_ROUTE18GATE2F_LEFT_BINOCULARS" },
      { x: 6, y: 2, signId: "TEXT_ROUTE18GATE2F_RIGHT_BINOCULARS" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: "SPRITE_YOUNGSTER",
        movement: "WALK",
        textId: "TEXT_ROUTE18GATE2F_YOUNGSTER"
      }
    ]
  },
  textPointers: []
};
