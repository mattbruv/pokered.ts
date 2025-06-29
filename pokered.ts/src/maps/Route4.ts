import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_4_BLOCKS } from "../data/blocks/Route4";

export const Route4: Map = {
  width: 45,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_4_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.Route3, yOffset: -25 },
    east: { map: MapName.CeruleanCity, xOffset: -4 }
  },
  objects: {
    warps: [
      { x: 11, y: 5, toMap: "MT_MOON_POKECENTER", warpId: 1 },
      { x: 18, y: 5, toMap: "MT_MOON_1F", warpId: 1 },
      { x: 24, y: 5, toMap: "MT_MOON_B1F", warpId: 8 }
    ],
    backgroundItems: [
      { x: 12, y: 5, signId: "TEXT_ROUTE4_POKECENTER_SIGN" },
      { x: 17, y: 7, signId: "TEXT_ROUTE4_MT_MOON_SIGN" },
      { x: 27, y: 7, signId: "TEXT_ROUTE4_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 9,
        y: 8,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "WALK",
        textId: "TEXT_ROUTE4_COOLTRAINER_F1"
      },
      {
        type: "trainer",
        x: 63,
        y: 3,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_ROUTE4_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 4
      },
      {
        type: "item",
        x: 57,
        y: 3,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_ROUTE4_TM_WHIRLWIND",
        itemId: "TM_WHIRLWIND"
      }
    ]
  },
  textPointers: []
};
