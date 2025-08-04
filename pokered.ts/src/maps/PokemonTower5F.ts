import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_5F_BLOCKS } from "../data/blocks/PokemonTower5F";
import { OverworldSprite } from "../sprite";

export const PokemonTower5F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_5F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 9, toMap: MapName.PokemonTower4F, warpIndex: 0 },
      { x: 18, y: 9, toMap: MapName.PokemonTower6F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 12,
        y: 8,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_CHANNELER,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER1"
      },
      {
        type: "trainer",
        x: 17,
        y: 7,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER2",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 14,
        y: 3,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 16
      },
      {
        type: "trainer",
        x: 6,
        y: 10,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER4",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 17
      },
      {
        type: "trainer",
        x: 9,
        y: 16,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_CHANNELER5",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 18
      },
      {
        type: "item",
        x: 6,
        y: 14,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER5F_NUGGET",
        itemId: "NUGGET"
      }
    ]
  },
  text: {
    _PokemonTower5FChanneler1Text: [
      ["text", "Come, child! I"],
      ["line", "sealed this space"],
      ["cont", "with white magic!"],
      ["para", "You can rest here!"]
    ],
    _PokemonTower5FChanneler2BattleText: [
      ["text", "Give...me..."],
      ["line", "your...soul..."]
    ],
    _PokemonTower5FChanneler2EndBattleText: [["text", "Gasp!"], ["prompt"]],
    _PokemonTower5FChanneler2AfterBattleText: [
      ["text", "I was under"],
      ["line", "possession!"]
    ],
    _PokemonTower5FChanneler3BattleText: [
      ["text", "You...shall..."],
      ["line", "join...us..."]
    ],
    _PokemonTower5FChanneler3EndBattleText: [
      ["text", "What"],
      ["line", "a nightmare!"],
      ["prompt"]
    ],
    _PokemonTower5FChanneler3AfterBattleText: [["text", "I was possessed!"]],
    _PokemonTower5FChanneler4BattleText: [["text", "Zombies!"]],
    _PokemonTower5FChanneler4EndBattleText: [["text", "Ha?"], ["prompt"]],
    _PokemonTower5FChanneler4AfterBattleText: [
      ["text", "I regained my"],
      ["line", "senses!"]
    ],
    _PokemonTower5FChanneler5BattleText: [
      ["text", "Urgah..."],
      ["line", "Urff...."]
    ],
    _PokemonTower5FChanneler5EndBattleText: [["text", "Whoo!"], ["prompt"]],
    _PokemonTower5FChanneler5AfterBattleText: [
      ["text", "I fell to evil"],
      ["line", "spirits despite"],
      ["cont", "my training!"]
    ],
    _PokemonTower5FPurifiedZoneText: [
      ["text", "Entered purified,"],
      ["line", "protected zone!"],
      ["para", "<PLAYER>'s #MON"],
      ["line", "are fully healed!"]
    ]
  }
};
