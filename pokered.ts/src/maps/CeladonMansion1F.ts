import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_1F_BLOCKS } from "../data/blocks/CeladonMansion1F";

export const CeladonMansion1F: Map = {
  width: 4,
  height: 6,
  blocks: CELADON_MANSION_1F_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
