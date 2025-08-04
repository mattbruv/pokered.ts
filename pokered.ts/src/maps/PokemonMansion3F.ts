import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_MANSION_3F_BLOCKS } from "../data/blocks/PokemonMansion3F";
import { OverworldSprite } from "../sprite";

export const PokemonMansion3F: Map = {
  width: 15,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_MANSION_3F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 7, y: 10, toMap: MapName.PokemonMansion2F, warpIndex: 1 },
      { x: 6, y: 1, toMap: MapName.PokemonMansion2F, warpIndex: 3 },
      { x: 25, y: 14, toMap: MapName.PokemonMansion2F, warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 11,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "LEFT_RIGHT",
        movement: "WALK",
        textId: "TEXT_POKEMONMANSION3F_SUPER_NERD",
        trainerId: "OPP_BURGLAR",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 20,
        y: 11,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION3F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 12
      },
      {
        type: "item",
        x: 1,
        y: 16,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION3F_MAX_POTION",
        itemId: "MAX_POTION"
      },
      {
        type: "item",
        x: 25,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION3F_IRON",
        itemId: "IRON"
      },
      {
        type: "sprite",
        x: 6,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_POKEMONMANSION3F_DIARY"
      }
    ]
  },
  text: {
    _PokemonMansion3FSuperNerdBattleText: [
      ["text", "This place is"],
      ["line", "like, huge!"]
    ],
    _PokemonMansion3FSuperNerdEndBattleText: [["text", "Ayah!"], ["prompt"]],
    _PokemonMansion3FSuperNerdAfterBattleText: [
      ["text", "I wonder where"],
      ["line", "my partner went."]
    ],
    _PokemonMansion3FScientistBattleText: [
      ["text", "My mentor once"],
      ["line", "lived here."]
    ],
    _PokemonMansion3FScientistEndBattleText: [
      ["text", "Whew!"],
      ["line", "Overwhelming!"],
      ["prompt"]
    ],
    _PokemonMansion3FScientistAfterBattleText: [
      ["text", "So, you're stuck?"],
      ["line", "Try jumping off"],
      ["cont", "over there!"]
    ],
    _PokemonMansion3FDiaryText: [
      ["text", "Diary: Feb. 6"],
      ["line", "MEW gave birth."],
      ["para", "We named the"],
      ["line", "newborn MEWTWO."]
    ]
  }
};
