import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_ROOF_BLOCKS } from "../data/blocks/CeladonMartRoof";

export const CeladonMartRoof: Map = {
  width: 10,
  height: 4,
  blocks: CELADON_MART_ROOF_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
};
