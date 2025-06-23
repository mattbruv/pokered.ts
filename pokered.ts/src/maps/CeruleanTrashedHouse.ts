import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_TRASHED_HOUSE_BLOCKS } from "../data/blocks/CeruleanTrashedHouse";

export const CeruleanTrashedHouse: Map = {
  width: 4,
  height: 4,
  blocks: CERULEAN_TRASHED_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
