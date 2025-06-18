import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_2F_BLOCKS } from "../data/blocks/CeladonMansion2F";

export const CeladonMansion2F: Map = {
  width: 4,
  height: 6,
  blocks: CELADON_MANSION_2F_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
