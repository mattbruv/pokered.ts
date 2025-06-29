import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_3F_BLOCKS } from "../data/blocks/PokemonTower3F";

export const PokemonTower3F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_3F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 9, toMap: "POKEMON_TOWER_2F", warpId: 1 },
      { x: 18, y: 9, toMap: "POKEMON_TOWER_4F", warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 3,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_CHANNELER1",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 9,
        y: 8,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_CHANNELER2",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 10,
        y: 13,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 8
      },
      {
        type: "item",
        x: 12,
        y: 1,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_ESCAPE_ROPE",
        itemId: "ESCAPE_ROPE"
      }
    ]
  },
  textPointers: []
};
