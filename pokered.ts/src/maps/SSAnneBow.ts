import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_BOW_BLOCKS } from "../data/blocks/SSAnneBow";

export const SSAnneBow: Map = {
  width: 10,
  height: 7,
  borderBlock: 35,
  blocks: SS_ANNE_BOW_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 13, y: 6, toMap: "SS_ANNE_3F", warpId: 1 },
      { x: 13, y: 7, toMap: "SS_ANNE_3F", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 2,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 4,
        y: 9,
        sprite: "SPRITE_SAILOR",
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_SAILOR1"
      },
      {
        type: "sprite",
        x: 7,
        y: 11,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_COOLTRAINER_M"
      },
      {
        type: "trainer",
        x: 4,
        y: 4,
        sprite: "SPRITE_SAILOR",
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_SAILOR2",
        trainerId: "OPP_SAILOR",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 10,
        y: 8,
        sprite: "SPRITE_SAILOR",
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_SAILOR3",
        trainerId: "OPP_SAILOR",
        trainerLevel: 2
      }
    ]
  },
  textPointers: []
};
