import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_TRASHED_HOUSE_BLOCKS } from "../data/blocks/CeruleanTrashedHouse";

export const CeruleanTrashedHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: CERULEAN_TRASHED_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 0, toMap: "LAST_MAP", warpIndex: 7 }
    ],
    backgroundItems: [
      { x: 3, y: 0, signId: "TEXT_CERULEANTRASHEDHOUSE_WALL_HOLE" }
    ],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 1,
        sprite: "SPRITE_FISHING_GURU",
        movement: "STAY",
        textId: "TEXT_CERULEANTRASHEDHOUSE_FISHING_GURU"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        sprite: "SPRITE_GIRL",
        movement: "WALK",
        textId: "TEXT_CERULEANTRASHEDHOUSE_GIRL"
      }
    ]
  },
  textPointers: []
};
