import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BRUNOS_ROOM_BLOCKS } from "../data/blocks/BrunosRoom";
import { OverworldSprite } from "../sprite";

export const BrunosRoom: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: BRUNOS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: MapName.LoreleisRoom, warpIndex: 2 },
      { x: 5, y: 11, toMap: MapName.LoreleisRoom, warpIndex: 3 },
      { x: 4, y: 0, toMap: MapName.AgathasRoom, warpIndex: 0 },
      { x: 5, y: 0, toMap: MapName.AgathasRoom, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 2,
        sprite: OverworldSprite.SPRITE_BRUNO,
        movement: "STAY",
        textId: "TEXT_BRUNOSROOM_BRUNO",
        trainerId: "OPP_BRUNO",
        trainerLevel: 1
      }
    ]
  },
  textPointers: []
};
