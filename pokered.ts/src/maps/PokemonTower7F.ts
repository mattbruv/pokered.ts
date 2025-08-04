import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_7F_BLOCKS } from "../data/blocks/PokemonTower7F";
import { OverworldSprite } from "../sprite";

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
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER7F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 19
      },
      {
        type: "trainer",
        x: 12,
        y: 9,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER7F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 20
      },
      {
        type: "trainer",
        x: 9,
        y: 7,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER7F_ROCKET3",
        trainerId: "OPP_ROCKET",
        trainerLevel: 21
      },
      {
        type: "sprite",
        x: 10,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_MR_FUJI,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER7F_MR_FUJI"
      }
    ]
  },
  text: {
    _PokemonTower7FMrFujiRescueText: [
      ["text", "MR.FUJI: Heh? You"],
      ["line", "came to save me?"],
      ["para", "Thank you. But, I"],
      ["line", "came here of my"],
      ["cont", "own free will."],
      ["para", "I came to calm"],
      ["line", "the soul of"],
      ["cont", "CUBONE's mother."],
      ["para", "I think MAROWAK's"],
      ["line", "spirit has gone"],
      ["cont", "to the afterlife."],
      ["para", "I must thank you"],
      ["line", "for your kind"],
      ["cont", "concern!"],
      ["para", "Follow me to my"],
      ["line", "home, #MON"],
      ["cont", "HOUSE at the foot"],
      ["cont", "of this tower."]
    ],
    _PokemonTower7FRocket1BattleText: [
      ["text", "What do you want?"],
      ["line", "Why are you here?"]
    ],
    _PokemonTower7FRocket1EndBattleText: [["text", "I give up!"], ["prompt"]],
    _PokemonTower7FRocket1AfterBattleText: [
      ["text", "I'm not going to"],
      ["line", "forget this!"]
    ],
    _PokemonTower7FRocket2BattleText: [
      ["text", "This old guy came"],
      ["line", "and complained"],
      ["cont", "about us harming"],
      ["cont", "useless #MON!"],
      ["para", "We're talking it"],
      ["line", "over as adults!"]
    ],
    _PokemonTower7FRocket2EndBattleText: [
      ["text", "Please!"],
      ["line", "No more!"],
      ["prompt"]
    ],
    _PokemonTower7FRocket2AfterBattleText: [
      ["text", "#MON are only"],
      ["line", "good for making"],
      ["cont", "money!"],
      ["para", "Stay out of our"],
      ["line", "business!"]
    ],
    _PokemonTower7FRocket3BattleText: [
      ["text", "You're not saving"],
      ["line", "anyone, kid!"]
    ],
    _PokemonTower7FRocket3EndBattleText: [
      ["text", "Don't"],
      ["line", "fight us ROCKETs!"],
      ["prompt"]
    ],
    _PokemonTower7FRocket3AfterBattleText: [
      ["text", "You're not getting"],
      ["line", "away with this!"]
    ]
  }
};
