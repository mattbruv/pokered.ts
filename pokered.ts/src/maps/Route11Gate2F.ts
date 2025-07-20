import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_11_GATE_2F_BLOCKS } from "../data/blocks/Route11Gate2F";
import { OverworldSprite } from "../sprite";

export const Route11Gate2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_11_GATE_2F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 7, toMap: MapName.Route11Gate1F, warpIndex: 4 }],
    backgroundItems: [
      { x: 1, y: 2, signId: "TEXT_ROUTE11GATE2F_LEFT_BINOCULARS" },
      { x: 6, y: 2, signId: "TEXT_ROUTE11GATE2F_RIGHT_BINOCULARS" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_ROUTE11GATE2F_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 2,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_ROUTE11GATE2F_OAKS_AIDE"
      }
    ]
  },
  textPointers: []
};
