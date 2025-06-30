import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LANCES_ROOM_BLOCKS } from "../data/blocks/LancesRoom";
import { OverworldSprite } from "../sprite";

export const LancesRoom: Map = {
  width: 13,
  height: 13,
  borderBlock: 3,
  blocks: LANCES_ROOM_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  objects: {
    warps: [
      { x: 24, y: 16, toMap: MapName.AgathasRoom, warpIndex: 2 },
      { x: 5, y: 0, toMap: MapName.ChampionsRoom, warpIndex: 0 },
      { x: 6, y: 0, toMap: MapName.ChampionsRoom, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 6,
        y: 1,
        sprite: OverworldSprite.SPRITE_LANCE,
        movement: "STAY",
        textId: "TEXT_LANCESROOM_LANCE",
        trainerId: "OPP_LANCE",
        trainerLevel: 1
      }
    ]
  },
  textPointers: []
};
