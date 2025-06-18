import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_2F_BLOCKS } from "../data/blocks/PokemonTower2F";

export const PokemonTower2F: Map = {
  width: 10,
  height: 9,
  blocks: POKEMON_TOWER_2F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
