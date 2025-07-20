import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_15_GATE_2F_BLOCKS } from "../data/blocks/Route15Gate2F";
import { OverworldSprite } from "../sprite";

export const Route15Gate2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_15_GATE_2F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 7, toMap: MapName.Route15Gate1F, warpIndex: 4 }],
    backgroundItems: [{ x: 6, y: 2, signId: "TEXT_ROUTE15GATE2F_BINOCULARS" }],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_ROUTE15GATE2F_OAKS_AIDE"
      }
    ]
  },
  textPointers: []
};
