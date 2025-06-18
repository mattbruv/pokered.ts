import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VICTORY_ROAD_3F_BLOCKS } from "../data/blocks/VictoryRoad3F";

export const VictoryRoad3F: Map = {
  width: 15,
  height: 9,
  blocks: VICTORY_ROAD_3F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
