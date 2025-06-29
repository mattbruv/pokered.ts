import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { REDS_HOUSE_1F_BLOCKS } from "../data/blocks/RedsHouse1F";

export const RedsHouse1F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: REDS_HOUSE_1F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_1,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 7, y: 1, toMap: "REDS_HOUSE_2F", warpId: 1 }
    ],
    backgroundItems: [{ x: 3, y: 1, signId: "TEXT_REDSHOUSE1F_TV" }],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 4,
        sprite: "SPRITE_MOM",
        movement: "STAY",
        textId: "TEXT_REDSHOUSE1F_MOM"
      }
    ]
  },
  textPointers: []
};
