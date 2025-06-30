import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_SUPER_ROD_HOUSE_BLOCKS } from "../data/blocks/Route12SuperRodHouse";

export const Route12SuperRodHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_12_SUPER_ROD_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 4,
        sprite: "SPRITE_FISHING_GURU",
        movement: "STAY",
        textId: "TEXT_ROUTE12SUPERRODHOUSE_FISHING_GURU"
      }
    ]
  },
  textPointers: []
};
