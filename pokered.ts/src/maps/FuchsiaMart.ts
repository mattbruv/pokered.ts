import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_MART_BLOCKS } from "../data/blocks/FuchsiaMart";

export const FuchsiaMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: FUCHSIA_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_FUCHSIAMART_CLERK"
      },
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: "SPRITE_MIDDLE_AGED_MAN",
        movement: "STAY",
        textId: "TEXT_FUCHSIAMART_MIDDLE_AGED_MAN"
      },
      {
        type: "sprite",
        x: 6,
        y: 5,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "WALK",
        textId: "TEXT_FUCHSIAMART_COOLTRAINER_F"
      }
    ]
  },
  textPointers: []
};
