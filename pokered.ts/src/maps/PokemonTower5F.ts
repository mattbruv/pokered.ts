import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_5F_BLOCKS } from "../data/blocks/PokemonTower5F";

export const PokemonTower5F: Map = {
  width: 10,
  height: 9,
  blocks: POKEMON_TOWER_5F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  object: {},
  textPointers: [],
};
