import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_OLD_ROD_HOUSE_BLOCKS } from "../data/blocks/VermilionOldRodHouse";

export const VermilionOldRodHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: VERMILION_OLD_ROD_HOUSE_BLOCKS,
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
        y: 4,
        sprite: "SPRITE_FISHING_GURU",
        movement: "STAY",
        textId: "TEXT_VERMILIONOLDRODHOUSE_FISHING_GURU"
      }
    ]
  },
  textPointers: []
};
