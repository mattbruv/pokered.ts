import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_FLY_HOUSE_BLOCKS } from "../data/blocks/Route16FlyHouse";

export const Route16FlyHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_16_FLY_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 9 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 9 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: "SPRITE_BRUNETTE_GIRL",
        movement: "STAY",
        textId: "TEXT_ROUTE16FLYHOUSE_BRUNETTE_GIRL"
      },
      {
        type: "sprite",
        x: 6,
        y: 4,
        sprite: "SPRITE_BIRD",
        movement: "WALK",
        textId: "TEXT_ROUTE16FLYHOUSE_FEAROW"
      }
    ]
  },
  textPointers: []
};
