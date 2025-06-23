import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MR_FUJIS_HOUSE_BLOCKS } from "../data/blocks/MrFujisHouse";

export const MrFujisHouse: Map = {
  width: 4,
  height: 4,
  blocks: MR_FUJIS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
