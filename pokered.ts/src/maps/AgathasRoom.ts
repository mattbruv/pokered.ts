import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { AGATHAS_ROOM_BLOCKS } from "../data/blocks/AgathasRoom";

export const AgathasRoom: Map = {
  width: 5,
  height: 6,
  borderBlock: 0,
  blocks: AGATHAS_ROOM_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: MapName.BrunosRoom, warpId: 3 },
      { x: 5, y: 11, toMap: MapName.BrunosRoom, warpId: 4 },
      { x: 4, y: 0, toMap: MapName.LancesRoom, warpId: 1 },
      { x: 5, y: 0, toMap: MapName.LancesRoom, warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 2,
        sprite: "SPRITE_AGATHA",
        movement: "STAY",
        textId: "TEXT_AGATHASROOM_AGATHA",
        trainerId: "OPP_AGATHA",
        trainerLevel: 1
      }
    ]
  },
  textPointers: []
};
