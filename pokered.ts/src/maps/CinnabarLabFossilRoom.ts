import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_LAB_FOSSIL_ROOM_BLOCKS } from "../data/blocks/CinnabarLabFossilRoom";
import { OverworldSprite } from "../sprite";

export const CinnabarLabFossilRoom: Map = {
  width: 4,
  height: 4,
  borderBlock: 23,
  blocks: CINNABAR_LAB_FOSSIL_ROOM_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: MapName.CinnabarLab, warpIndex: 4 },
      { x: 3, y: 7, toMap: MapName.CinnabarLab, warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 2,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "WALK",
        textId: "TEXT_CINNABARLABFOSSILROOM_SCIENTIST1"
      },
      {
        type: "sprite",
        x: 7,
        y: 6,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_CINNABARLABFOSSILROOM_SCIENTIST2"
      }
    ]
  },
  textPointers: []
};
