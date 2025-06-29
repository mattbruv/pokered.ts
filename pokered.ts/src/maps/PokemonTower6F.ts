import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_6F_BLOCKS } from "../data/blocks/PokemonTower6F";

export const PokemonTower6F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_6F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 18, y: 9, toMap: "POKEMON_TOWER_5F", warpId: 2 },
      { x: 9, y: 16, toMap: "POKEMON_TOWER_7F", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 10,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_CHANNELER1",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 19
      },
      {
        type: "trainer",
        x: 9,
        y: 5,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_CHANNELER2",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 20
      },
      {
        type: "trainer",
        x: 16,
        y: 5,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 21
      },
      {
        type: "item",
        x: 6,
        y: 8,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "item",
        x: 14,
        y: 14,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_X_ACCURACY",
        itemId: "X_ACCURACY"
      }
    ]
  },
  textPointers: []
};
