import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_6F_BLOCKS } from "../data/blocks/PokemonTower6F";

export const PokemonTower6F: Map = {
  width: 10,
  height: 9,
  blocks: POKEMON_TOWER_6F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  object: {},
  textPointers: [],
};
