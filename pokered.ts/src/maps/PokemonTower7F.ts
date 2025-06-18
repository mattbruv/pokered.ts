import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_7F_BLOCKS } from "../data/blocks/PokemonTower7F";

export const PokemonTower7F: Map = {
  width: 10,
  height: 9,
  blocks: POKEMON_TOWER_7F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
