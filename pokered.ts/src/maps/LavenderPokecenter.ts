import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_POKECENTER_BLOCKS } from "../data/blocks/LavenderPokecenter";

export const LavenderPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: LAVENDER_POKECENTER_BLOCKS,
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
        textId: "TEXT_LAVENDERPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 5,
        y: 3,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_LAVENDERPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 2,
        y: 6,
        sprite: "SPRITE_LITTLE_GIRL",
        movement: "WALK",
        textId: "TEXT_LAVENDERPOKECENTER_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_LAVENDERPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
