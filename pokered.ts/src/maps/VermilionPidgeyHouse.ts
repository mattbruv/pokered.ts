import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_PIDGEY_HOUSE_BLOCKS } from "../data/blocks/VermilionPidgeyHouse";

export const VermilionPidgeyHouse: Map = {
  width: 4,
  height: 4,
  blocks: VERMILION_PIDGEY_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
