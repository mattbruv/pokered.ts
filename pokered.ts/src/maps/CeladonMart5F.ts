import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_5F_BLOCKS } from "../data/blocks/CeladonMart5F";

export const CeladonMart5F: Map = {
  width: 10,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_MART_5F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 12, y: 1, toMap: MapName.CeladonMartRoof, warpId: 1 },
      { x: 16, y: 1, toMap: MapName.CeladonMart4F, warpId: 2 },
      { x: 1, y: 1, toMap: MapName.CeladonMartElevator, warpId: 1 }
    ],
    backgroundItems: [
      { x: 14, y: 1, signId: "TEXT_CELADONMART5F_CURRENT_FLOOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 14,
        y: 5,
        sprite: "SPRITE_GENTLEMAN",
        movement: "WALK",
        textId: "TEXT_CELADONMART5F_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 2,
        y: 6,
        sprite: "SPRITE_SAILOR",
        movement: "STAY",
        textId: "TEXT_CELADONMART5F_SAILOR"
      },
      {
        type: "sprite",
        x: 5,
        y: 3,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_CELADONMART5F_CLERK1"
      },
      {
        type: "sprite",
        x: 6,
        y: 3,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_CELADONMART5F_CLERK2"
      }
    ]
  },
  textPointers: []
};
