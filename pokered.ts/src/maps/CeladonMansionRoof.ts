import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_ROOF_BLOCKS } from "../data/blocks/CeladonMansionRoof";

export const CeladonMansionRoof: Map = {
  width: 4,
  height: 6,
  blocks: CELADON_MANSION_ROOF_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  object: {},
  textPointers: [],
};
