import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_3F_BLOCKS } from "../data/blocks/PokemonMansion3F";

export const PokemonMansion3F: Map = {
  width: 15,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_MANSION_3F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 7, y: 10, toMap: "POKEMON_MANSION_2F", warpId: 2 },
      { x: 6, y: 1, toMap: "POKEMON_MANSION_2F", warpId: 4 },
      { x: 25, y: 14, toMap: "POKEMON_MANSION_2F", warpId: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 11,
        sprite: "SPRITE_SUPER_NERD",
        movement: "WALK",
        textId: "TEXT_POKEMONMANSION3F_SUPER_NERD",
        trainerId: "OPP_BURGLAR",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 20,
        y: 11,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION3F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 12
      },
      {
        type: "item",
        x: 1,
        y: 16,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION3F_MAX_POTION",
        itemId: "MAX_POTION"
      },
      {
        type: "item",
        x: 25,
        y: 5,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION3F_IRON",
        itemId: "IRON"
      },
      {
        type: "sprite",
        x: 6,
        y: 12,
        sprite: "SPRITE_POKEDEX",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION3F_DIARY"
      }
    ]
  },
  textPointers: []
};
