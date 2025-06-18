import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_ROOF_HOUSE_BLOCKS } from "../data/blocks/CeladonMansionRoofHouse";

export const CeladonMansionRoofHouse: Map = {
  width: 4,
  height: 4,
  blocks: CELADON_MANSION_ROOF_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
