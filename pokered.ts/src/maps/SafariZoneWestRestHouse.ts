import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_WEST_REST_HOUSE_BLOCKS } from "../data/blocks/SafariZoneWestRestHouse";
import { OverworldSprite } from "../sprite";

export const SafariZoneWestRestHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: SAFARI_ZONE_WEST_REST_HOUSE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: MapName.SafariZoneWest, warpIndex: 7 },
      { x: 3, y: 7, toMap: MapName.SafariZoneWest, warpIndex: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 4,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "WALK",
        textId: "TEXT_SAFARIZONEWESTRESTHOUSE_SCIENTIST"
      },
      {
        type: "sprite",
        x: 0,
        y: 2,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_SAFARIZONEWESTRESTHOUSE_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 6,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "STAY",
        textId: "TEXT_SAFARIZONEWESTRESTHOUSE_SILPH_WORKER_F"
      }
    ]
  },
  textPointers: []
};
