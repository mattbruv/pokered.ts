import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_KITCHEN_BLOCKS } from "../data/blocks/SSAnneKitchen";

export const SSAnneKitchen: Map = {
  width: 7,
  height: 8,
  blocks: SS_ANNE_KITCHEN_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
