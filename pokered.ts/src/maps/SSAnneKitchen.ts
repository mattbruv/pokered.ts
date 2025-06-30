import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_KITCHEN_BLOCKS } from "../data/blocks/SSAnneKitchen";
import { OverworldSprite } from "../sprite";

export const SSAnneKitchen: Map = {
  width: 7,
  height: 8,
  borderBlock: 12,
  blocks: SS_ANNE_KITCHEN_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [{ x: 6, y: 0, toMap: MapName.SSAnne1F, warpIndex: 10 }],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 8,
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "WALK",
        textId: "TEXT_SSANNEKITCHEN_COOK1"
      },
      {
        type: "sprite",
        x: 5,
        y: 8,
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "WALK",
        textId: "TEXT_SSANNEKITCHEN_COOK2"
      },
      {
        type: "sprite",
        x: 9,
        y: 7,
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "WALK",
        textId: "TEXT_SSANNEKITCHEN_COOK3"
      },
      {
        type: "sprite",
        x: 13,
        y: 6,
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "STAY",
        textId: "TEXT_SSANNEKITCHEN_COOK4"
      },
      {
        type: "sprite",
        x: 13,
        y: 8,
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "STAY",
        textId: "TEXT_SSANNEKITCHEN_COOK5"
      },
      {
        type: "sprite",
        x: 13,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "STAY",
        textId: "TEXT_SSANNEKITCHEN_COOK6"
      },
      {
        type: "sprite",
        x: 11,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "STAY",
        textId: "TEXT_SSANNEKITCHEN_COOK7"
      }
    ]
  },
  textPointers: []
};
