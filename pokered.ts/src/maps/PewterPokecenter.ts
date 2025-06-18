import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_POKECENTER_BLOCKS } from "../data/blocks/PewterPokecenter";

export const PewterPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: PEWTER_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
