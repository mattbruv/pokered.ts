import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_SECRET_HOUSE_BLOCKS } from "../data/blocks/SafariZoneSecretHouse";
import { OverworldSprite } from "../sprite";

export const SafariZoneSecretHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 23,
  blocks: SAFARI_ZONE_SECRET_HOUSE_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: MapName.SafariZoneWest, warpIndex: 6 },
      { x: 3, y: 7, toMap: MapName.SafariZoneWest, warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_FISHING_GURU,
        movement: "STAY",
        textId: "TEXT_SAFARIZONESECRETHOUSE_FISHING_GURU"
      }
    ]
  },
  textPointers: []
};
