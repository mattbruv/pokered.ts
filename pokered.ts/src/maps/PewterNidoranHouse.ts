import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_NIDORAN_HOUSE_BLOCKS } from "../data/blocks/PewterNidoranHouse";

export const PewterNidoranHouse: Map = {
  width: 4,
  height: 4,
  blocks: PEWTER_NIDORAN_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
