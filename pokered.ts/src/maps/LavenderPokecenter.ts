import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_POKECENTER_BLOCKS } from "../data/blocks/LavenderPokecenter";

export const LavenderPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: LAVENDER_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
