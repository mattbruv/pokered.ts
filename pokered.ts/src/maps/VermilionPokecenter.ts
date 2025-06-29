import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_POKECENTER_BLOCKS } from "../data/blocks/VermilionPokecenter";

export const VermilionPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: VERMILION_POKECENTER_BLOCKS,
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
        textId: "TEXT_VERMILIONPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 10,
        y: 5,
        sprite: "SPRITE_FISHING_GURU",
        movement: "STAY",
        textId: "TEXT_VERMILIONPOKECENTER_FISHING_GURU"
      },
      {
        type: "sprite",
        x: 5,
        y: 4,
        sprite: "SPRITE_SAILOR",
        movement: "STAY",
        textId: "TEXT_VERMILIONPOKECENTER_SAILOR"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_VERMILIONPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
