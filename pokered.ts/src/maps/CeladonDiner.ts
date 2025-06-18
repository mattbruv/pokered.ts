import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_DINER_BLOCKS } from "../data/blocks/CeladonDiner";

export const CeladonDiner: Map = {
  width: 5,
  height: 4,
  blocks: CELADON_DINER_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
