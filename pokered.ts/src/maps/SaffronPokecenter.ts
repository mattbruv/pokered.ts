import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_POKECENTER_BLOCKS } from "../data/blocks/SaffronPokecenter";

export const SaffronPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: SAFFRON_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 6 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: "SPRITE_NURSE",
        movement: "STAY",
        textId: "TEXT_SAFFRONPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        sprite: "SPRITE_BEAUTY",
        movement: "STAY",
        textId: "TEXT_SAFFRONPOKECENTER_BEAUTY"
      },
      {
        type: "sprite",
        x: 8,
        y: 3,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_SAFFRONPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_SAFFRONPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
