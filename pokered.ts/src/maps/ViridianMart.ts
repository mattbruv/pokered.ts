import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_MART_BLOCKS } from "../data/blocks/ViridianMart";
import { OverworldSprite } from "../sprite";

export const ViridianMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: VIRIDIAN_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_VIRIDIANMART_CLERK"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_VIRIDIANMART_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 3,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_VIRIDIANMART_COOLTRAINER_M"
      }
    ]
  },
  textPointers: []
};
