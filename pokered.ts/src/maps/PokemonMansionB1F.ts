import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_B1F_BLOCKS } from "../data/blocks/PokemonMansionB1F";

export const PokemonMansionB1F: Map = {
  width: 15,
  height: 14,
  borderBlock: 1,
  blocks: POKEMON_MANSION_B1F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [{ x: 23, y: 22, toMap: MapName.PokemonMansion1F, warpId: 6 }],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 16,
        y: 23,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_BURGLAR",
        trainerId: "OPP_BURGLAR",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 27,
        y: 11,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 13
      },
      {
        type: "item",
        x: 10,
        y: 2,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "item",
        x: 1,
        y: 22,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_FULL_RESTORE",
        itemId: "FULL_RESTORE"
      },
      {
        type: "item",
        x: 19,
        y: 25,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_TM_BLIZZARD",
        itemId: "TM_BLIZZARD"
      },
      {
        type: "item",
        x: 5,
        y: 4,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_TM_SOLARBEAM",
        itemId: "TM_SOLARBEAM"
      },
      {
        type: "sprite",
        x: 16,
        y: 20,
        sprite: "SPRITE_POKEDEX",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_DIARY"
      },
      {
        type: "item",
        x: 5,
        y: 13,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_SECRET_KEY",
        itemId: "SECRET_KEY"
      }
    ]
  },
  textPointers: []
};
