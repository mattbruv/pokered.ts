import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_B1F_BLOCKS } from "../data/blocks/PokemonMansionB1F";

export const PokemonMansionB1F: Map = {
  width: 15,
  height: 14,
  blocks: POKEMON_MANSION_B1F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
