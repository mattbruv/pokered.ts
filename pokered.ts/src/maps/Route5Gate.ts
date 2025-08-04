import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_5_GATE_BLOCKS } from "../data/blocks/Route5Gate";
import { OverworldSprite } from "../sprite";

export const Route5Gate: Map = {
  width: 4,
  height: 3,
  borderBlock: 10,
  blocks: ROUTE_5_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 5, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 4, y: 5, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 3, y: 0, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 4, y: 0, toMap: "LAST_MAP", warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_ROUTE5GATE_GUARD"
      }
    ]
  },
  text: {}
};
