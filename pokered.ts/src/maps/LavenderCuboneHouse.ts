import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_CUBONE_HOUSE_BLOCKS } from "../data/blocks/LavenderCuboneHouse";

export const LavenderCuboneHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: LAVENDER_CUBONE_HOUSE_BLOCKS,
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
        x: 3,
        y: 5,
        sprite: "SPRITE_MONSTER",
        movement: "STAY",
        textId: "TEXT_LAVENDERCUBONEHOUSE_CUBONE"
      },
      {
        type: "sprite",
        x: 2,
        y: 4,
        sprite: "SPRITE_BRUNETTE_GIRL",
        movement: "STAY",
        textId: "TEXT_LAVENDERCUBONEHOUSE_BRUNETTE_GIRL"
      }
    ]
  },
  textPointers: []
};
