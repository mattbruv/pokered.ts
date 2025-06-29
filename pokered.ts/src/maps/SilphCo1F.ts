import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_1F_BLOCKS } from "../data/blocks/SilphCo1F";

export const SilphCo1F: Map = {
  width: 15,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_1F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 10, y: 17, toMap: "LAST_MAP", warpId: 6 },
      { x: 11, y: 17, toMap: "LAST_MAP", warpId: 6 },
      { x: 26, y: 0, toMap: "SILPH_CO_2F", warpId: 1 },
      { x: 20, y: 0, toMap: "SILPH_CO_ELEVATOR", warpId: 1 },
      { x: 16, y: 10, toMap: "SILPH_CO_3F", warpId: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_SILPHCO1F_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
