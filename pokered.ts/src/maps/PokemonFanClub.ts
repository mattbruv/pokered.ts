import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_FAN_CLUB_BLOCKS } from "../data/blocks/PokemonFanClub";

export const PokemonFanClub: Map = {
  width: 4,
  height: 4,
  blocks: POKEMON_FAN_CLUB_BLOCKS,
  tileset: Tileset.INTERIOR,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
