import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_4F_BLOCKS } from "../data/blocks/PokemonTower4F";
import { OverworldSprite } from "../sprite";

export const PokemonTower4F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_4F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 9, toMap: MapName.PokemonTower5F, warpIndex: 0 },
      { x: 18, y: 9, toMap: MapName.PokemonTower3F, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 10,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER4F_CHANNELER1",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 15,
        y: 7,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER4F_CHANNELER2",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 14,
        y: 12,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER4F_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 12
      },
      {
        type: "item",
        x: 12,
        y: 10,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER4F_ELIXER",
        itemId: "ELIXER"
      },
      {
        type: "item",
        x: 9,
        y: 10,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER4F_AWAKENING",
        itemId: "AWAKENING"
      },
      {
        type: "item",
        x: 12,
        y: 16,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER4F_HP_UP",
        itemId: "HP_UP"
      }
    ]
  },
  text: {
    _PokemonTower4FChanneler1BattleText: [
      ["text", "GHOST! No!"],
      ["line", "Kwaaah!"]
    ],
    _PokemonTower4FChanneler1EndBattleText: [
      ["text", "Where"],
      ["line", "is the GHOST?"],
      ["prompt"]
    ],
    _PokemonTower4FChanneler1AfterBattleText: [
      ["text", "I must have been"],
      ["line", "dreaming..."]
    ],
    _PokemonTower4FChanneler2BattleText: [
      ["text", "Be cursed with"],
      ["line", "me! Kwaaah!"]
    ],
    _PokemonTower4FChanneler2EndBattleText: [["text", "What!"], ["prompt"]],
    _PokemonTower4FChanneler2AfterBattleText: [
      ["text", "We can't crack"],
      ["line", "the identity of"],
      ["cont", "the GHOSTs."]
    ],
    _PokemonTower4FChanneler3BattleText: [
      ["text", "Huhuhu..."],
      ["line", "Beat me not!"]
    ],
    _PokemonTower4FChanneler3EndBattleText: [
      ["text", "Huh?"],
      ["line", "Who? What?"],
      ["prompt"]
    ],
    _PokemonTower4FChanneler3AfterBattleText: [
      ["text", "May the departed"],
      ["line", "souls of #MON"],
      ["cont", "rest in peace..."]
    ]
  }
};
