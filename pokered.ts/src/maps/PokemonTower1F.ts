import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_1F_BLOCKS } from "../data/blocks/PokemonTower1F";

export const PokemonTower1F: Map = {
  width: 10,
  height: 9,
  blocks: POKEMON_TOWER_1F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
