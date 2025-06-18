import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_2F_BLOCKS } from "../data/blocks/PokemonMansion2F";

export const PokemonMansion2F: Map = {
  width: 15,
  height: 14,
  blocks: POKEMON_MANSION_2F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
