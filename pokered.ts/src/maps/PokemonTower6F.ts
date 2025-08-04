import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_6F_BLOCKS } from "../data/blocks/PokemonTower6F";
import { OverworldSprite } from "../sprite";

export const PokemonTower6F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_6F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 18, y: 9, toMap: MapName.PokemonTower5F, warpIndex: 1 },
      { x: 9, y: 16, toMap: MapName.PokemonTower7F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 10,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_CHANNELER1",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 19
      },
      {
        type: "trainer",
        x: 9,
        y: 5,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_CHANNELER2",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 20
      },
      {
        type: "trainer",
        x: 16,
        y: 5,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 21
      },
      {
        type: "item",
        x: 6,
        y: 8,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "item",
        x: 14,
        y: 14,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER6F_X_ACCURACY",
        itemId: "X_ACCURACY"
      }
    ]
  },
  text: {
    _PokemonTower6FGhostWasCubonesMotherText: [
      ["text", "The GHOST was the"],
      ["line", "restless soul of"],
      ["cont", "CUBONE's mother!"]
    ],
    _PokemonTower6FSoulWasCalmedText: [
      ["text", "The mother's soul"],
      ["line", "was calmed."],
      ["para", "It departed to"],
      ["line", "the afterlife!"]
    ],
    _PokemonTower6FChanneler1BattleText: [
      ["text", "Give...me..."],
      ["line", "blood..."]
    ],
    _PokemonTower6FChanneler1EndBattleText: [["text", "Groan!"], ["prompt"]],
    _PokemonTower6FChanneler1AfterBattleText: [
      ["text", "I feel anemic and"],
      ["line", "weak..."]
    ],
    _PokemonTower6FChanneler2BattleText: [["text", "Urff... Kwaah!"]],
    _PokemonTower6FChanneler2EndBattleText: [
      ["text", "Some-"],
      ["line", "thing fell out!"],
      ["prompt"]
    ],
    _PokemonTower6FChanneler2AfterBattleText: [
      ["text", "Hair didn't fall"],
      ["line", "out! It was an"],
      ["cont", "evil spirit!"]
    ],
    _PokemonTower6FChanneler3BattleText: [
      ["text", "Ke..ke...ke..."],
      ["line", "ke..ke...ke!!"]
    ],
    _PokemonTower6FChanneler3EndBattleText: [["text", "Keee!"], ["prompt"]],
    _PokemonTower6FChanneler3AfterBattleText: [
      ["text", "What's going on"],
      ["line", "here?"]
    ],
    _PokemonTower6FBeGoneText: [
      ["text", "Be gone..."],
      ["line", "Intruders..."]
    ]
  }
};
