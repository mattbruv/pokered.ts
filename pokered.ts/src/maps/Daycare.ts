import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DAYCARE_BLOCKS } from "../data/blocks/Daycare";

export const Daycare: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: DAYCARE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 5 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: "SPRITE_GENTLEMAN",
        movement: "STAY",
        textId: "TEXT_DAYCARE_GENTLEMAN"
      }
    ]
  },
  textPointers: []
};
