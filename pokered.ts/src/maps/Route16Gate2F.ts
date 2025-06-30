import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_GATE_2F_BLOCKS } from "../data/blocks/Route16Gate2F";
import { OverworldSprite } from "../sprite";

export const Route16Gate2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_16_GATE_2F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 7, toMap: MapName.Route16Gate1F, warpIndex: 8 }],
    backgroundItems: [
      { x: 1, y: 2, signId: "TEXT_ROUTE16GATE2F_LEFT_BINOCULARS" },
      { x: 6, y: 2, signId: "TEXT_ROUTE16GATE2F_RIGHT_BINOCULARS" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: OverworldSprite.SPRITE_LITTLE_BOY,
        movement: "STAY",
        textId: "TEXT_ROUTE16GATE2F_LITTLE_BOY"
      },
      {
        type: "sprite",
        x: 2,
        y: 5,
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "WALK",
        textId: "TEXT_ROUTE16GATE2F_LITTLE_GIRL"
      }
    ]
  },
  textPointers: []
};
