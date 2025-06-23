import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FIGHTING_DOJO_BLOCKS } from "../data/blocks/FightingDojo";

export const FightingDojo: Map = {
  width: 5,
  height: 6,
  blocks: FIGHTING_DOJO_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  object: {},
  textPointers: [],
};
