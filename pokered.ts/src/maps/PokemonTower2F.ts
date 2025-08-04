import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_2F_BLOCKS } from "../data/blocks/PokemonTower2F";
import { OverworldSprite } from "../sprite";

export const PokemonTower2F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_2F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 9, toMap: MapName.PokemonTower3F, warpIndex: 0 },
      { x: 18, y: 9, toMap: MapName.PokemonTower1F, warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 14,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BLUE,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER2F_RIVAL"
      },
      {
        type: "sprite",
        x: 3,
        y: 7,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_CHANNELER,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER2F_CHANNELER"
      }
    ]
  },
  text: {
    _PokemonTower2FRivalWhatBringsYouHereText: [
      ["text", "<RIVAL>: Hey,"],
      ["line", "<PLAYER>! What"],
      ["cont", "brings you here?"],
      ["cont", "Your #MON"],
      ["cont", "don't look dead!"],
      ["para", "I can at least"],
      ["line", "make them faint!"],
      ["cont", "Let's go, pal!"]
    ],
    _PokemonTower2FRivalDefeatedText: [
      ["text", "What?"],
      ["line", "You stinker!"],
      ["para", "I took it easy on"],
      ["line", "you too!"],
      ["prompt"]
    ],
    _PokemonTower2FRivalVictoryText: [
      ["text", "<RIVAL>: Well,"],
      ["line", "look at all your"],
      ["cont", "wimpy #MON!"],
      ["para", "Toughen them up a"],
      ["line", "bit more!"],
      ["prompt"]
    ],
    _PokemonTower2FRivalHowsYourDexText: [
      ["text", "How's your #DEX"],
      ["line", "coming, pal?"],
      ["cont", "I just caught a"],
      ["cont", "CUBONE!"],
      ["para", "I can't find the"],
      ["line", "grown-up MAROWAK"],
      ["cont", "yet!"],
      ["para", "I doubt there are"],
      ["line", "any left! Well, I"],
      ["cont", "better get going!"],
      ["cont", "I've got a lot to"],
      ["cont", "accomplish, pal!"],
      ["para", "Smell ya later!"]
    ],
    _PokemonTower2FChannelerText: [
      ["text", "Even we could not"],
      ["line", "identify the"],
      ["cont", "wayward GHOSTs!"],
      ["para", "A SILPH SCOPE"],
      ["line", "might be able to"],
      ["cont", "unmask them."]
    ]
  }
};
