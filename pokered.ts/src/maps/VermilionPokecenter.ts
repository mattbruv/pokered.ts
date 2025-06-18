import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_POKECENTER_BLOCKS } from "../data/blocks/VermilionPokecenter";

export const VermilionPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: VERMILION_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
