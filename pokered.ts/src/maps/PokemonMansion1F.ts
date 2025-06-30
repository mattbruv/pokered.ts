import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_1F_BLOCKS } from "../data/blocks/PokemonMansion1F";
import { OverworldSprite } from "../sprite";

export const PokemonMansion1F: Map = {
  width: 15,
  height: 14,
  borderBlock: 46,
  blocks: POKEMON_MANSION_1F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 27, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 5, y: 27, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 6, y: 27, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 7, y: 27, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 5, y: 10, toMap: MapName.PokemonMansion2F, warpIndex: 0 },
      { x: 21, y: 23, toMap: MapName.PokemonMansionB1F, warpIndex: 0 },
      { x: 26, y: 27, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 27, y: 27, toMap: "LAST_MAP", warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 17,
        y: 17,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION1F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 4
      },
      {
        type: "item",
        x: 14,
        y: 3,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION1F_ESCAPE_ROPE",
        itemId: "ESCAPE_ROPE"
      },
      {
        type: "item",
        x: 18,
        y: 21,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION1F_CARBOS",
        itemId: "CARBOS"
      }
    ]
  },
  textPointers: []
};
