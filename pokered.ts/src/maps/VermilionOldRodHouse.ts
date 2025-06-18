import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_OLD_ROD_HOUSE_BLOCKS } from "../data/blocks/VermilionOldRodHouse";

export const VermilionOldRodHouse: Map = {
  width: 4,
  height: 4,
  blocks: VERMILION_OLD_ROD_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
