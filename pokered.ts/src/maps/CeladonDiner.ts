import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_DINER_BLOCKS } from "../data/blocks/CeladonDiner";

export const CeladonDiner: Map = {
  width: 5,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_DINER_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 11 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 11 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 5,
        sprite: "SPRITE_COOK",
        movement: "WALK",
        textId: "TEXT_CELADONDINER_COOK"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        sprite: "SPRITE_MIDDLE_AGED_WOMAN",
        movement: "STAY",
        textId: "TEXT_CELADONDINER_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: "SPRITE_MIDDLE_AGED_MAN",
        movement: "STAY",
        textId: "TEXT_CELADONDINER_MIDDLE_AGED_MAN"
      },
      {
        type: "sprite",
        x: 5,
        y: 3,
        sprite: "SPRITE_FISHER",
        movement: "STAY",
        textId: "TEXT_CELADONDINER_FISHER"
      },
      {
        type: "sprite",
        x: 0,
        y: 1,
        sprite: "SPRITE_GYM_GUIDE",
        movement: "STAY",
        textId: "TEXT_CELADONDINER_GYM_GUIDE"
      }
    ]
  },
  textPointers: []
};
