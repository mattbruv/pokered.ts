import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_POKECENTER_BLOCKS } from "../data/blocks/PewterPokecenter";

export const PewterPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: PEWTER_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 7 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: "SPRITE_NURSE",
        movement: "STAY",
        textId: "TEXT_PEWTERPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 11,
        y: 7,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_PEWTERPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 1,
        y: 3,
        sprite: "SPRITE_FAIRY",
        movement: "STAY",
        textId: "TEXT_PEWTERPOKECENTER_JIGGLYPUFF"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_PEWTERPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
