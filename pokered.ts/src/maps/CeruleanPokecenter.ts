import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_POKECENTER_BLOCKS } from "../data/blocks/CeruleanPokecenter";
import { OverworldSprite } from "../sprite";

export const CeruleanPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: CERULEAN_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: OverworldSprite.SPRITE_NURSE,
        movement: "STAY",
        textId: "TEXT_CERULEANPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 10,
        y: 5,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "WALK",
        textId: "TEXT_CERULEANPOKECENTER_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_CERULEANPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_CERULEANPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
