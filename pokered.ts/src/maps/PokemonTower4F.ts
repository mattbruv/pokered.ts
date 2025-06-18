import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_4F_BLOCKS } from "../data/blocks/PokemonTower4F";

export const PokemonTower4F: Map = {
  width: 10,
  height: 9,
  blocks: POKEMON_TOWER_4F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
