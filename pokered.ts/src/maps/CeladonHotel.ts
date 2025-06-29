import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_HOTEL_BLOCKS } from "../data/blocks/CeladonHotel";

export const CeladonHotel: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: CELADON_HOTEL_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 13 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 13 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: "SPRITE_GRANNY",
        movement: "STAY",
        textId: "TEXT_CELADONHOTEL_GRANNY"
      },
      {
        type: "sprite",
        x: 2,
        y: 4,
        sprite: "SPRITE_BEAUTY",
        movement: "STAY",
        textId: "TEXT_CELADONHOTEL_BEAUTY"
      },
      {
        type: "sprite",
        x: 8,
        y: 4,
        sprite: "SPRITE_SUPER_NERD",
        movement: "WALK",
        textId: "TEXT_CELADONHOTEL_SUPER_NERD"
      }
    ]
  },
  textPointers: []
};
