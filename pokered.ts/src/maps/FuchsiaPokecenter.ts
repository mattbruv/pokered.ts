import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_POKECENTER_BLOCKS } from "../data/blocks/FuchsiaPokecenter";

export const FuchsiaPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: FUCHSIA_POKECENTER_BLOCKS,
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
        sprite: "SPRITE_NURSE",
        movement: "STAY",
        textId: "TEXT_FUCHSIAPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: "SPRITE_ROCKER",
        movement: "STAY",
        textId: "TEXT_FUCHSIAPOKECENTER_ROCKER"
      },
      {
        type: "sprite",
        x: 6,
        y: 5,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "WALK",
        textId: "TEXT_FUCHSIAPOKECENTER_COOLTRAINER_F"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_FUCHSIAPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
