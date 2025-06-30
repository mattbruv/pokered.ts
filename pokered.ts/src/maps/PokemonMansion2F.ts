import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_2F_BLOCKS } from "../data/blocks/PokemonMansion2F";

export const PokemonMansion2F: Map = {
  width: 15,
  height: 14,
  borderBlock: 1,
  blocks: POKEMON_MANSION_2F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 10, toMap: MapName.PokemonMansion1F, warpIndex: 4 },
      { x: 7, y: 10, toMap: MapName.PokemonMansion3F, warpIndex: 0 },
      { x: 25, y: 14, toMap: MapName.PokemonMansion3F, warpIndex: 2 },
      { x: 6, y: 1, toMap: MapName.PokemonMansion3F, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 3,
        y: 17,
        sprite: "SPRITE_SUPER_NERD",
        movement: "WALK",
        textId: "TEXT_POKEMONMANSION2F_SUPER_NERD",
        trainerId: "OPP_BURGLAR",
        trainerLevel: 7
      },
      {
        type: "item",
        x: 28,
        y: 7,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION2F_CALCIUM",
        itemId: "CALCIUM"
      },
      {
        type: "sprite",
        x: 18,
        y: 2,
        sprite: "SPRITE_POKEDEX",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION2F_DIARY1"
      },
      {
        type: "sprite",
        x: 3,
        y: 22,
        sprite: "SPRITE_POKEDEX",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION2F_DIARY2"
      }
    ]
  },
  textPointers: []
};
