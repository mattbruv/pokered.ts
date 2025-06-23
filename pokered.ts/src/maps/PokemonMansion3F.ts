import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_3F_BLOCKS } from "../data/blocks/PokemonMansion3F";

export const PokemonMansion3F: Map = {
  width: 15,
  height: 9,
  blocks: POKEMON_MANSION_3F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
};
