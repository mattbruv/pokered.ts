import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_NORTH_REST_HOUSE_BLOCKS } from "../data/blocks/SafariZoneNorthRestHouse";
import { OverworldSprite } from "../sprite";

export const SafariZoneNorthRestHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: SAFARI_ZONE_NORTH_REST_HOUSE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: MapName.SafariZoneNorth, warpIndex: 8 },
      { x: 3, y: 7, toMap: MapName.SafariZoneNorth, warpIndex: 8 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 3,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "WALK",
        textId: "TEXT_SAFARIZONENORTHRESTHOUSE_SCIENTIST"
      },
      {
        type: "sprite",
        x: 3,
        y: 4,
        sprite: OverworldSprite.SPRITE_SAFARI_ZONE_WORKER,
        movement: "STAY",
        textId: "TEXT_SAFARIZONENORTHRESTHOUSE_SAFARI_ZONE_WORKER"
      },
      {
        type: "sprite",
        x: 1,
        y: 5,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "WALK",
        textId: "TEXT_SAFARIZONENORTHRESTHOUSE_GENTLEMAN"
      }
    ]
  },
  textPointers: []
};
