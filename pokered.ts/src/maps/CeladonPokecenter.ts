import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_POKECENTER_BLOCKS } from "../data/blocks/CeladonPokecenter";

export const CeladonPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: CELADON_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: "SPRITE_NURSE",
        movement: "STAY",
        textId: "TEXT_CELADONPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        sprite: "SPRITE_GENTLEMAN",
        movement: "WALK",
        textId: "TEXT_CELADONPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 10,
        y: 5,
        sprite: "SPRITE_BEAUTY",
        movement: "WALK",
        textId: "TEXT_CELADONPOKECENTER_BEAUTY"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_CELADONPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
