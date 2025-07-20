import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_2_GATE_BLOCKS } from "../data/blocks/Route2Gate";
import { OverworldSprite } from "../sprite";

export const Route2Gate: Map = {
  width: 5,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_2_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 0, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 5, y: 0, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 4,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_ROUTE2GATE_OAKS_AIDE"
      },
      {
        type: "sprite",
        x: 5,
        y: 4,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_ROUTE2GATE_YOUNGSTER"
      }
    ]
  },
  textPointers: []
};
