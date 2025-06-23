import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_3F_BLOCKS } from "../data/blocks/PokemonTower3F";

export const PokemonTower3F: Map = {
  width: 10,
  height: 9,
  blocks: POKEMON_TOWER_3F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  object: {},
  textPointers: [],
};
