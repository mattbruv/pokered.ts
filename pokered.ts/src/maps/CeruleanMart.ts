import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_MART_BLOCKS } from "../data/blocks/CeruleanMart";
import { OverworldSprite } from "../sprite";

export const CeruleanMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: CERULEAN_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CERULEANMART_CLERK"
      },
      {
        type: "sprite",
        x: 3,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "WALK",
        textId: "TEXT_CERULEANMART_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 6,
        y: 2,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "WALK",
        textId: "TEXT_CERULEANMART_COOLTRAINER_F"
      }
    ]
  },
  textPointers: []
};
