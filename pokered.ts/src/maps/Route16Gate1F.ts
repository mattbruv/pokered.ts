import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_GATE_1F_BLOCKS } from "../data/blocks/Route16Gate1F";
import { OverworldSprite } from "../sprite";

export const Route16Gate1F: Map = {
  width: 4,
  height: 7,
  borderBlock: 10,
  blocks: ROUTE_16_GATE_1F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 8, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 0, y: 9, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 7, y: 8, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 7, y: 9, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 0, y: 2, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 0, y: 3, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 7, y: 2, toMap: "LAST_MAP", warpIndex: 6 },
      { x: 7, y: 3, toMap: "LAST_MAP", warpIndex: 7 },
      { x: 6, y: 12, toMap: MapName.Route16Gate2F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 5,
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_ROUTE16GATE1F_GUARD"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_ROUTE16GATE1F_GAMBLER"
      }
    ]
  },
  textPointers: []
};
