import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VICTORY_ROAD_2F_BLOCKS } from "../data/blocks/VictoryRoad2F";

export const VictoryRoad2F: Map = {
  width: 15,
  height: 9,
  blocks: VICTORY_ROAD_2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
