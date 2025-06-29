import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_EAST_REST_HOUSE_BLOCKS } from "../data/blocks/SafariZoneEastRestHouse";

export const SafariZoneEastRestHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: SAFARI_ZONE_EAST_REST_HOUSE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "SAFARI_ZONE_EAST", warpId: 5 },
      { x: 3, y: 7, toMap: "SAFARI_ZONE_EAST", warpId: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 3,
        sprite: "SPRITE_SCIENTIST",
        movement: "WALK",
        textId: "TEXT_SAFARIZONEEASTRESTHOUSE_SCIENTIST"
      },
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: "SPRITE_ROCKER",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEEASTRESTHOUSE_ROCKER"
      },
      {
        type: "sprite",
        x: 5,
        y: 2,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEEASTRESTHOUSE_SILPH_WORKER_M"
      }
    ]
  },
  textPointers: []
};
