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
        direction: "LEFT",
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
        direction: "DOWN",
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
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 8
      },
      {
        type: "item",
        x: 12,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER3F_ESCAPE_ROPE",
        itemId: "ESCAPE_ROPE"
      }
    ]
  },
  text: {
    _PokemonTower3FChanneler1BattleText: [
      ["text", "Urrg...Awaa..."],
      ["line", "Huhu...graa.."]
    ],
    _PokemonTower3FChanneler1EndBattleText: [
      ["text", "Hwa!"],
      ["line", "I'm saved!"],
      ["prompt"]
    ],
    _PokemonTower3FChanneler1AfterBattleText: [
      ["text", "The GHOSTs can be"],
      ["line", "identified by the"],
      ["cont", "SILPH SCOPE."]
    ],
    _PokemonTower3FChanneler2BattleText: [
      ["text", "Kekeke...."],
      ["line", "Kwaaah!"]
    ],
    _PokemonTower3FChanneler2EndBattleText: [
      ["text", "Hmm?"],
      ["line", "What am I doing?"],
      ["prompt"]
    ],
    _PokemonTower3FChanneler2AfterBattleText: [
      ["text", "Sorry! I was"],
      ["line", "possessed!"]
    ],
    _PokemonTower3FChanneler3BattleText: [
      ["text", "Be gone!"],
      ["line", "Evil spirit!"]
    ],
    _PokemonTower3FChanneler3EndBattleText: [
      ["text", "Whew!"],
      ["line", "The spirit left!"],
      ["prompt"]
    ],
    _PokemonTower3FChanneler3AfterBattleText: [
      ["text", "My friends were"],
      ["line", "possessed too!"]
    ]
  }
};
