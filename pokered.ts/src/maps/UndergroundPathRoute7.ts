import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_7_BLOCKS } from "../data/blocks/UndergroundPathRoute7";

export const UndergroundPathRoute7: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: UNDERGROUND_PATH_ROUTE_7_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 5 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 5 },
      { x: 4, y: 4, toMap: "UNDERGROUND_PATH_WEST_EAST", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 4,
        sprite: "SPRITE_MIDDLE_AGED_MAN",
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE7_MIDDLE_AGED_MAN"
      }
    ]
  },
  textPointers: []
};
