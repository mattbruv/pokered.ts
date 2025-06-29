import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_PIDGEY_HOUSE_BLOCKS } from "../data/blocks/SaffronPidgeyHouse";

export const SaffronPidgeyHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: SAFFRON_PIDGEY_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 4 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: "SPRITE_BRUNETTE_GIRL",
        movement: "STAY",
        textId: "TEXT_SAFFRONPIDGEYHOUSE_BRUNETTE_GIRL"
      },
      {
        type: "sprite",
        x: 0,
        y: 4,
        sprite: "SPRITE_BIRD",
        movement: "WALK",
        textId: "TEXT_SAFFRONPIDGEYHOUSE_PIDGEY"
      },
      {
        type: "sprite",
        x: 4,
        y: 1,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_SAFFRONPIDGEYHOUSE_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 3,
        y: 3,
        sprite: "SPRITE_PAPER",
        movement: "STAY",
        textId: "TEXT_SAFFRONPIDGEYHOUSE_PAPER"
      }
    ]
  },
  textPointers: []
};
