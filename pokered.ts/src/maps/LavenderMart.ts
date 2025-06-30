import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_MART_BLOCKS } from "../data/blocks/LavenderMart";
import { OverworldSprite } from "../sprite";

export const LavenderMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: LAVENDER_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_LAVENDERMART_CLERK"
      },
      {
        type: "sprite",
        x: 3,
        y: 4,
        sprite: OverworldSprite.SPRITE_BALDING_GUY,
        movement: "STAY",
        textId: "TEXT_LAVENDERMART_BALDING_GUY"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_LAVENDERMART_COOLTRAINER_M"
      }
    ]
  },
  textPointers: []
};
