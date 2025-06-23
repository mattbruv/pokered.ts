import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_BILLS_GRANDPAS_HOUSE_BLOCKS } from "../data/blocks/FuchsiaBillsGrandpasHouse";

export const FuchsiaBillsGrandpasHouse: Map = {
  width: 4,
  height: 4,
  blocks: FUCHSIA_BILLS_GRANDPAS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
