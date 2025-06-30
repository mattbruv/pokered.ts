import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_PIDGEY_HOUSE_BLOCKS } from "../data/blocks/VermilionPidgeyHouse";

export const VermilionPidgeyHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: VERMILION_PIDGEY_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_VERMILIONPIDGEYHOUSE_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 3,
        y: 5,
        sprite: "SPRITE_BIRD",
        movement: "WALK",
        textId: "TEXT_VERMILIONPIDGEYHOUSE_PIDGEY"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        sprite: "SPRITE_PAPER",
        movement: "STAY",
        textId: "TEXT_VERMILIONPIDGEYHOUSE_LETTER"
      }
    ]
  },
  textPointers: []
};
