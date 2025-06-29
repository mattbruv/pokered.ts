import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_GOOD_ROD_HOUSE_BLOCKS } from "../data/blocks/FuchsiaGoodRodHouse";

export const FuchsiaGoodRodHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 12,
  blocks: FUCHSIA_GOOD_ROD_HOUSE_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 0, toMap: "LAST_MAP", warpId: 9 },
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 8 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 8 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        sprite: "SPRITE_FISHING_GURU",
        movement: "STAY",
        textId: "TEXT_FUCHSIAGOODRODHOUSE_FISHING_GURU"
      }
    ]
  },
  textPointers: []
};
