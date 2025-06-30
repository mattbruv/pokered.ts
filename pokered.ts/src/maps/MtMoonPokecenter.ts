import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_POKECENTER_BLOCKS } from "../data/blocks/MtMoonPokecenter";
import { OverworldSprite } from "../sprite";

export const MtMoonPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: MT_MOON_POKECENTER_BLOCKS,
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
        textId: "TEXT_MTMOONPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 10,
        y: 6,
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "WALK",
        textId: "TEXT_MTMOONPOKECENTER_MAGIKARP_SALESMAN"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        sprite: OverworldSprite.SPRITE_CLIPBOARD,
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_CLIPBOARD"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
