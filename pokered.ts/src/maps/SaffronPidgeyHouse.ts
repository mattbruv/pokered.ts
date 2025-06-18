import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_PIDGEY_HOUSE_BLOCKS } from "../data/blocks/SaffronPidgeyHouse";

export const SaffronPidgeyHouse: Map = {
  width: 4,
  height: 4,
  blocks: SAFFRON_PIDGEY_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
