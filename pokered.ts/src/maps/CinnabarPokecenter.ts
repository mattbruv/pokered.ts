import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_POKECENTER_BLOCKS } from "../data/blocks/CinnabarPokecenter";

export const CinnabarPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: CINNABAR_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
