import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LORELEIS_ROOM_BLOCKS } from "../data/blocks/LoreleisRoom";
import { OverworldSprite } from "../sprite";

export const LoreleisRoom: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: LORELEIS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: MapName.IndigoPlateauLobby, warpIndex: 2 },
      { x: 5, y: 11, toMap: MapName.IndigoPlateauLobby, warpIndex: 2 },
      { x: 4, y: 0, toMap: MapName.BrunosRoom, warpIndex: 0 },
      { x: 5, y: 0, toMap: MapName.BrunosRoom, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 2,
        sprite: OverworldSprite.SPRITE_LORELEI,
        movement: "STAY",
        textId: "TEXT_LORELEISROOM_LORELEI",
        trainerId: "OPP_LORELEI",
        trainerLevel: 1
      }
    ]
  },
  textPointers: []
};
