import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_5F_BLOCKS } from "../data/blocks/PokemonTower5F";

export const PokemonTower5F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_5F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 9, toMap: "POKEMON_TOWER_4F", warpId: 1 },
      { x: 18, y: 9, toMap: "POKEMON_TOWER_6F", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 12,
        y: 8,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER1"
      },
      {
        type: "trainer",
        x: 17,
        y: 7,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER2",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 14,
        y: 3,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 16
      },
      {
        type: "trainer",
        x: 6,
        y: 10,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER4",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 17
      },
      {
        type: "trainer",
        x: 9,
        y: 16,
        sprite: "SPRITE_CHANNELER",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER5",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 18
      },
      {
        type: "item",
        x: 6,
        y: 14,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_NUGGET",
        itemId: "NUGGET"
      }
    ]
  },
  textPointers: []
};
