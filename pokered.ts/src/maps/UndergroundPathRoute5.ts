import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_5_BLOCKS } from "../data/blocks/UndergroundPathRoute5";

export const UndergroundPathRoute5: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: UNDERGROUND_PATH_ROUTE_5_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 4 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 4 },
      { x: 4, y: 4, toMap: "UNDERGROUND_PATH_NORTH_SOUTH", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: "SPRITE_LITTLE_GIRL",
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE5_LITTLE_GIRL"
      }
    ]
  },
  textPointers: []
};
