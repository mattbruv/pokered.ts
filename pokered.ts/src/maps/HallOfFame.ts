import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { HALL_OF_FAME_BLOCKS } from "../data/blocks/HallOfFame";

export const HallOfFame: Map = {
  width: 5,
  height: 4,
  blocks: HALL_OF_FAME_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
