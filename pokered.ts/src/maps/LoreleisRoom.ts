import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LORELEIS_ROOM_BLOCKS } from "../data/blocks/LoreleisRoom";

export const LoreleisRoom: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: LORELEIS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: "INDIGO_PLATEAU_LOBBY", warpId: 3 },
      { x: 5, y: 11, toMap: "INDIGO_PLATEAU_LOBBY", warpId: 3 },
      { x: 4, y: 0, toMap: "BRUNOS_ROOM", warpId: 1 },
      { x: 5, y: 0, toMap: "BRUNOS_ROOM", warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 2,
        sprite: "SPRITE_LORELEI",
        movement: "STAY",
        textId: "TEXT_LORELEISROOM_LORELEI",
        trainerId: "OPP_LORELEI",
        trainerLevel: 1
      }
    ]
  },
  textPointers: []
};
