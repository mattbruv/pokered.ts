import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_8_BLOCKS } from "../data/blocks/UndergroundPathRoute8";

export const UndergroundPathRoute8: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: UNDERGROUND_PATH_ROUTE_8_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 5 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 5 },
      { x: 4, y: 4, toMap: MapName.UndergroundPathWestEast, warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 4,
        sprite: "SPRITE_GIRL",
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE8_GIRL"
      }
    ]
  },
  textPointers: []
};
