import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_SCHOOL_HOUSE_BLOCKS } from "../data/blocks/ViridianSchoolHouse";

export const ViridianSchoolHouse: Map = {
  width: 4,
  height: 4,
  blocks: VIRIDIAN_SCHOOL_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
