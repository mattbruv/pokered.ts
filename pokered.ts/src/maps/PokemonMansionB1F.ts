import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_B1F_BLOCKS } from "../data/blocks/PokemonMansionB1F";
import { OverworldSprite } from "../sprite";

export const PokemonMansionB1F: Map = {
  width: 15,
  height: 14,
  borderBlock: 1,
  blocks: POKEMON_MANSION_B1F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [{ x: 23, y: 22, toMap: MapName.PokemonMansion1F, warpIndex: 5 }],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 16,
        y: 23,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "NONE",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_BURGLAR",
        trainerId: "OPP_BURGLAR",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 27,
        y: 11,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 13
      },
      {
        type: "item",
        x: 10,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "item",
        x: 1,
        y: 22,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_FULL_RESTORE",
        itemId: "FULL_RESTORE"
      },
      {
        type: "item",
        x: 19,
        y: 25,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_TM_BLIZZARD",
        itemId: "TM_BLIZZARD"
      },
      {
        type: "item",
        x: 5,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_TM_SOLARBEAM",
        itemId: "TM_SOLARBEAM"
      },
      {
        type: "sprite",
        x: 16,
        y: 20,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_DIARY"
      },
      {
        type: "item",
        x: 5,
        y: 13,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSIONB1F_SECRET_KEY",
        itemId: "SECRET_KEY"
      }
    ]
  },
  textPointers: []
};
