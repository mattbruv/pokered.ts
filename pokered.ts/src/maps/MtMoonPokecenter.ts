import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_POKECENTER_BLOCKS } from "../data/blocks/MtMoonPokecenter";

export const MtMoonPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: MT_MOON_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: "SPRITE_NURSE",
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 10,
        y: 6,
        sprite: "SPRITE_MIDDLE_AGED_MAN",
        movement: "WALK",
        textId: "TEXT_MTMOONPOKECENTER_MAGIKARP_SALESMAN"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        sprite: "SPRITE_CLIPBOARD",
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_CLIPBOARD"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_MTMOONPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
