import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { AGATHAS_ROOM_BLOCKS } from "../data/blocks/AgathasRoom";
import { OverworldSprite } from "../sprite";

export const AgathasRoom: Map = {
  width: 5,
  height: 6,
  borderBlock: 0,
  blocks: AGATHAS_ROOM_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: MapName.BrunosRoom, warpIndex: 2 },
      { x: 5, y: 11, toMap: MapName.BrunosRoom, warpIndex: 3 },
      { x: 4, y: 0, toMap: MapName.LancesRoom, warpIndex: 0 },
      { x: 5, y: 0, toMap: MapName.LancesRoom, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 2,
        sprite: OverworldSprite.SPRITE_AGATHA,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_AGATHASROOM_AGATHA",
        trainerId: "OPP_AGATHA",
        trainerLevel: 1
      }
    ]
  },
  textPointers: []
};
