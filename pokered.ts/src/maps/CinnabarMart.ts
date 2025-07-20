import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_MART_BLOCKS } from "../data/blocks/CinnabarMart";
import { OverworldSprite } from "../sprite";

export const CinnabarMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: CINNABAR_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CINNABARMART_CLERK"
      },
      {
        type: "sprite",
        x: 6,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "STAY",
        textId: "TEXT_CINNABARMART_SILPH_WORKER_F"
      },
      {
        type: "sprite",
        x: 3,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_CINNABARMART_SCIENTIST"
      }
    ]
  },
  textPointers: []
};
