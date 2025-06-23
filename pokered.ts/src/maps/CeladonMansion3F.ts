import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_3F_BLOCKS } from "../data/blocks/CeladonMansion3F";

export const CeladonMansion3F: Map = {
  width: 4,
  height: 6,
  blocks: CELADON_MANSION_3F_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  object: {},
  textPointers: [],
};
