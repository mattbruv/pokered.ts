import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_FLY_HOUSE_BLOCKS } from "../data/blocks/Route16FlyHouse";

export const Route16FlyHouse: Map = {
  width: 4,
  height: 4,
  blocks: ROUTE_16_FLY_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
