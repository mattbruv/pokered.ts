import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_3F_BLOCKS } from "../data/blocks/PokemonTower3F";
import { OverworldSprite } from "../sprite";

export const PokemonTower3F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_3F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 9, toMap: MapName.PokemonTower2F, warpIndex: 0 },
      { x: 18, y: 9, toMap: MapName.PokemonTower4F, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 3,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_CHANNELER1",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 9,
        y: 8,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_CHANNELER2",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 10,
        y: 13,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 8
      },
      {
        type: "item",
        x: 12,
        y: 1,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_ESCAPE_ROPE",
        itemId: "ESCAPE_ROPE"
      }
    ]
  },
  textPointers: []
};
