import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_GATE_2F_BLOCKS } from "../data/blocks/Route12Gate2F";
import { OverworldSprite } from "../sprite";

export const Route12Gate2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_12_GATE_2F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 7, toMap: MapName.Route12Gate1F, warpIndex: 4 }],
    backgroundItems: [
      { x: 1, y: 2, signId: "TEXT_ROUTE12GATE2F_LEFT_BINOCULARS" },
      { x: 6, y: 2, signId: "TEXT_ROUTE12GATE2F_RIGHT_BINOCULARS" }
    ],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 4,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        movement: "WALK",
        textId: "TEXT_ROUTE12GATE2F_BRUNETTE_GIRL"
      }
    ]
  },
  textPointers: []
};
