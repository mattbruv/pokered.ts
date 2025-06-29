import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_CHIEF_HOUSE_BLOCKS } from "../data/blocks/CeladonChiefHouse";

export const CeladonChiefHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_CHIEF_HOUSE_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 12 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 12 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: "SPRITE_GRAMPS",
        movement: "STAY",
        textId: "TEXT_CELADONCHIEFHOUSE_CHIEF"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: "SPRITE_ROCKET",
        movement: "WALK",
        textId: "TEXT_CELADONCHIEFHOUSE_ROCKET"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        sprite: "SPRITE_SAILOR",
        movement: "STAY",
        textId: "TEXT_CELADONCHIEFHOUSE_SAILOR"
      }
    ]
  },
  textPointers: []
};
