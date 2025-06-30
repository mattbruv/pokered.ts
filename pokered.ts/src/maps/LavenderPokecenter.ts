import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_POKECENTER_BLOCKS } from "../data/blocks/LavenderPokecenter";
import { OverworldSprite } from "../sprite";

export const LavenderPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: LAVENDER_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: OverworldSprite.SPRITE_NURSE,
        movement: "STAY",
        textId: "TEXT_LAVENDERPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 5,
        y: 3,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_LAVENDERPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 2,
        y: 6,
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "WALK",
        textId: "TEXT_LAVENDERPOKECENTER_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_LAVENDERPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
