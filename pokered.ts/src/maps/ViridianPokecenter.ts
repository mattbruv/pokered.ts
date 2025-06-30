import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_POKECENTER_BLOCKS } from "../data/blocks/ViridianPokecenter";

export const ViridianPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: VIRIDIAN_POKECENTER_BLOCKS,
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
        sprite: "SPRITE_NURSE",
        movement: "STAY",
        textId: "TEXT_VIRIDIANPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 10,
        y: 5,
        sprite: "SPRITE_GENTLEMAN",
        movement: "WALK",
        textId: "TEXT_VIRIDIANPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_VIRIDIANPOKECENTER_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_VIRIDIANPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
