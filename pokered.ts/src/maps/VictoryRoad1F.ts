import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VICTORY_ROAD_1F_BLOCKS } from "../data/blocks/VictoryRoad1F";

export const VictoryRoad1F: Map = {
  width: 10,
  height: 9,
  blocks: VICTORY_ROAD_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
