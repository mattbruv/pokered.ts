import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MUSEUM_2F_BLOCKS } from "../data/blocks/Museum2F";

export const Museum2F: Map = {
  width: 7,
  height: 4,
  blocks: MUSEUM_2F_BLOCKS,
  tileset: Tileset.MUSEUM,
  connections: {},
  object: {},
  textPointers: [],
};
