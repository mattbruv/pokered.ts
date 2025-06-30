import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_GATE_BLOCKS } from "../data/blocks/SafariZoneGate";

export const SafariZoneGate: Map = {
  width: 4,
  height: 3,
  borderBlock: 10,
  blocks: SAFARI_ZONE_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 5, toMap: "LAST_MAP", warpId: 5 },
      { x: 4, y: 5, toMap: "LAST_MAP", warpId: 5 },
      { x: 3, y: 0, toMap: MapName.SafariZoneCenter, warpId: 1 },
      { x: 4, y: 0, toMap: MapName.SafariZoneCenter, warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 2,
        sprite: "SPRITE_SAFARI_ZONE_WORKER",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEGATE_SAFARI_ZONE_WORKER1"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: "SPRITE_SAFARI_ZONE_WORKER",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEGATE_SAFARI_ZONE_WORKER2"
      }
    ]
  },
  textPointers: []
};
