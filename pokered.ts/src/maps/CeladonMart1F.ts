import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_1F_BLOCKS } from "../data/blocks/CeladonMart1F";

export const CeladonMart1F: Map = {
  width: 10,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_MART_1F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 16, y: 7, toMap: "LAST_MAP", warpId: 2 },
      { x: 17, y: 7, toMap: "LAST_MAP", warpId: 2 },
      { x: 12, y: 1, toMap: "CELADON_MART_2F", warpId: 1 },
      { x: 1, y: 1, toMap: "CELADON_MART_ELEVATOR", warpId: 1 }
    ],
    backgroundItems: [
      { x: 11, y: 4, signId: "TEXT_CELADONMART1F_DIRECTORY_SIGN" },
      { x: 14, y: 1, signId: "TEXT_CELADONMART1F_CURRENT_FLOOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 3,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_CELADONMART1F_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
