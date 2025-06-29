import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_CENTER_REST_HOUSE_BLOCKS } from "../data/blocks/SafariZoneCenterRestHouse";

export const SafariZoneCenterRestHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: SAFARI_ZONE_CENTER_REST_HOUSE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "SAFARI_ZONE_CENTER", warpId: 9 },
      { x: 3, y: 7, toMap: "SAFARI_ZONE_CENTER", warpId: 9 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 2,
        sprite: "SPRITE_GIRL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONECENTERRESTHOUSE_GIRL"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: "SPRITE_SCIENTIST",
        movement: "WALK",
        textId: "TEXT_SAFARIZONECENTERRESTHOUSE_SCIENTIST"
      }
    ]
  },
  textPointers: []
};
