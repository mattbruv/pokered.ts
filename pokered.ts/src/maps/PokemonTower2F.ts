import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_2F_BLOCKS } from "../data/blocks/PokemonTower2F";

export const PokemonTower2F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_2F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 9, toMap: "POKEMON_TOWER_3F", warpId: 1 },
      { x: 18, y: 9, toMap: "POKEMON_TOWER_1F", warpId: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 14,
        y: 5,
        sprite: "SPRITE_BLUE",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER2F_RIVAL"
      },
      {
        type: "sprite",
        x: 3,
        y: 7,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER2F_CHANNELER"
      }
    ]
  },
  textPointers: []
};
