import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_POKECENTER_BLOCKS } from "../data/blocks/CinnabarPokecenter";

export const CinnabarPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: CINNABAR_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 4 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: "SPRITE_NURSE",
        movement: "STAY",
        textId: "TEXT_CINNABARPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 9,
        y: 4,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "WALK",
        textId: "TEXT_CINNABARPOKECENTER_COOLTRAINER_F"
      },
      {
        type: "sprite",
        x: 2,
        y: 6,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_CINNABARPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_CINNABARPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
