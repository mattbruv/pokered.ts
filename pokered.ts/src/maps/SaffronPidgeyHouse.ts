import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_PIDGEY_HOUSE_BLOCKS } from "../data/blocks/SaffronPidgeyHouse";
import { OverworldSprite } from "../sprite";

export const SaffronPidgeyHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: SAFFRON_PIDGEY_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        movement: "STAY",
        textId: "TEXT_SAFFRONPIDGEYHOUSE_BRUNETTE_GIRL"
      },
      {
        type: "sprite",
        x: 0,
        y: 4,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_BIRD,
        movement: "WALK",
        textId: "TEXT_SAFFRONPIDGEYHOUSE_PIDGEY"
      },
      {
        type: "sprite",
        x: 4,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_SAFFRONPIDGEYHOUSE_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 3,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_PAPER,
        movement: "STAY",
        textId: "TEXT_SAFFRONPIDGEYHOUSE_PAPER"
      }
    ]
  },
  textPointers: []
};
