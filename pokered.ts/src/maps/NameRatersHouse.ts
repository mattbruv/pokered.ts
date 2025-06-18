import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { NAME_RATERS_HOUSE_BLOCKS } from "../data/blocks/NameRatersHouse";

export const NameRatersHouse: Map = {
  width: 4,
  height: 4,
  blocks: NAME_RATERS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
