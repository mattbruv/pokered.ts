import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_CHIEF_HOUSE_BLOCKS } from "../data/blocks/CeladonChiefHouse";

export const CeladonChiefHouse: Map = {
  width: 4,
  height: 4,
  blocks: CELADON_CHIEF_HOUSE_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
