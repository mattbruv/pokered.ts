import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { HALL_OF_FAME_BLOCKS } from "../data/blocks/HallOfFame";

export const HallOfFame: Map = {
  width: 5,
  height: 4,
  borderBlock: 3,
  blocks: HALL_OF_FAME_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: MapName.ChampionsRoom, warpId: 3 },
      { x: 5, y: 7, toMap: MapName.ChampionsRoom, warpId: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 2,
        sprite: "SPRITE_OAK",
        movement: "STAY",
        textId: "TEXT_HALLOFFAME_OAK"
      }
    ]
  },
  textPointers: []
};
