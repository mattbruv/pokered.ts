import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_18_GATE_1F_BLOCKS } from "../data/blocks/Route18Gate1F";
import { OverworldSprite } from "../sprite";

export const Route18Gate1F: Map = {
  width: 4,
  height: 5,
  borderBlock: 10,
  blocks: ROUTE_18_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 4, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 0, y: 5, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 7, y: 4, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 7, y: 5, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 6, y: 8, toMap: MapName.Route18Gate2F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 1,
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_ROUTE18GATE1F_GUARD"
      }
    ]
  },
  textPointers: []
};
