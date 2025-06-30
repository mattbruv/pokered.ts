import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_GATE_BLOCKS } from "../data/blocks/SafariZoneGate";
import { OverworldSprite } from "../sprite";

export const SafariZoneGate: Map = {
  width: 4,
  height: 3,
  borderBlock: 10,
  blocks: SAFARI_ZONE_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 5, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 5, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 3, y: 0, toMap: MapName.SafariZoneCenter, warpIndex: 0 },
      { x: 4, y: 0, toMap: MapName.SafariZoneCenter, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 2,
        sprite: OverworldSprite.SPRITE_SAFARI_ZONE_WORKER,
        movement: "STAY",
        textId: "TEXT_SAFARIZONEGATE_SAFARI_ZONE_WORKER1"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: OverworldSprite.SPRITE_SAFARI_ZONE_WORKER,
        movement: "STAY",
        textId: "TEXT_SAFARIZONEGATE_SAFARI_ZONE_WORKER2"
      }
    ]
  },
  textPointers: []
};
