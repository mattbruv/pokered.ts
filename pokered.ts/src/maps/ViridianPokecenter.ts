import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_POKECENTER_BLOCKS } from "../data/blocks/ViridianPokecenter";

export const ViridianPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: VIRIDIAN_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
