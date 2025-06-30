import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_7F_BLOCKS } from "../data/blocks/PokemonTower7F";

export const PokemonTower7F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_7F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [{ x: 9, y: 16, toMap: MapName.PokemonTower6F, warpIndex: 1 }],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 9,
        y: 11,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER7F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 19
      },
      {
        type: "trainer",
        x: 12,
        y: 9,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER7F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 20
      },
      {
        type: "trainer",
        x: 9,
        y: 7,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER7F_ROCKET3",
        trainerId: "OPP_ROCKET",
        trainerLevel: 21
      },
      {
        type: "sprite",
        x: 10,
        y: 3,
        sprite: "SPRITE_MR_FUJI",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER7F_MR_FUJI"
      }
    ]
  },
  textPointers: []
};
