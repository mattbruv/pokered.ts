import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_2F_BLOCKS } from "../data/blocks/PokemonMansion2F";
import { OverworldSprite } from "../sprite";

export const PokemonMansion2F: Map = {
  width: 15,
  height: 14,
  borderBlock: 1,
  blocks: POKEMON_MANSION_2F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 10, toMap: MapName.PokemonMansion1F, warpIndex: 4 },
      { x: 7, y: 10, toMap: MapName.PokemonMansion3F, warpIndex: 0 },
      { x: 25, y: 14, toMap: MapName.PokemonMansion3F, warpIndex: 2 },
      { x: 6, y: 1, toMap: MapName.PokemonMansion3F, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 3,
        y: 17,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "LEFT_RIGHT",
        movement: "WALK",
        textId: "TEXT_POKEMONMANSION2F_SUPER_NERD",
        trainerId: "OPP_BURGLAR",
        trainerLevel: 7
      },
      {
        type: "item",
        x: 28,
        y: 7,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION2F_CALCIUM",
        itemId: "CALCIUM"
      },
      {
        type: "sprite",
        x: 18,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION2F_DIARY1"
      },
      {
        type: "sprite",
        x: 3,
        y: 22,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION2F_DIARY2"
      }
    ]
  },
  text: {
    _PokemonMansion2FSuperNerdBattleText: [
      ["text", "I can't get out!"],
      ["line", "This old place is"],
      ["cont", "one big puzzle!"]
    ],
    _PokemonMansion2FSuperNerdEndBattleText: [
      ["text", "Oh no!"],
      ["line", "My bag of loot!"],
      ["prompt"]
    ],
    _PokemonMansion2FSuperNerdAfterBattleText: [
      ["text", "Switches open and"],
      ["line", "close alternating"],
      ["cont", "sets of doors!"]
    ],
    _PokemonMansion2FDiary1Text: [
      ["text", "Diary: July 5"],
      ["line", "Guyana,"],
      ["cont", "South America"],
      ["para", "A new #MON was"],
      ["line", "discovered deep"],
      ["cont", "in the jungle."]
    ],
    _PokemonMansion2FDiary2Text: [
      ["text", "Diary: July 10"],
      ["line", "We christened the"],
      ["cont", "newly discovered"],
      ["cont", "#MON, MEW."]
    ],
    _PokemonMansion2FSwitchText: [
      ["text", "A secret switch!"],
      ["para", "Press it?"]
    ],
    _PokemonMansion2FSwitchPressedText: [["text", "Who wouldn't?"], ["prompt"]],
    _PokemonMansion2FSwitchNotPressedText: [["text", "Not quite yet!"]]
  }
};
