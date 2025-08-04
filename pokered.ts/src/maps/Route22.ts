import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_22_BLOCKS } from "../data/blocks/Route22";
import { OverworldSprite } from "../sprite";

export const Route22: Map = {
  width: 20,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_22_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route23, xOffset: 0 },
    east: { map: MapName.ViridianCity, yOffset: -4 }
  },
  objects: {
    warps: [{ x: 8, y: 5, toMap: MapName.Route22Gate, warpIndex: 0 }],
    backgroundItems: [
      { x: 7, y: 11, signId: "TEXT_ROUTE22_POKEMON_LEAGUE_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 25,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BLUE,
        movement: "STAY",
        textId: "TEXT_ROUTE22_RIVAL1"
      },
      {
        type: "sprite",
        x: 25,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BLUE,
        movement: "STAY",
        textId: "TEXT_ROUTE22_RIVAL2"
      }
    ]
  },
  text: {
    _Route22RivalBeforeBattleText1: [
      ["text", "<RIVAL>: Hey!"],
      ["line", "<PLAYER>!"],
      ["para", "You're going to"],
      ["line", "#MON LEAGUE?"],
      ["para", "Forget it! You"],
      ["line", "probably don't"],
      ["cont", "have any BADGEs!"],
      ["para", "The guard won't"],
      ["line", "let you through!"],
      ["para", "By the way, did"],
      ["line", "your #MON"],
      ["cont", "get any stronger?"]
    ],
    _Route22RivalAfterBattleText1: [
      ["text", "I heard #MON"],
      ["line", "LEAGUE has many"],
      ["cont", "tough trainers!"],
      ["para", "I have to figure"],
      ["line", "out how to get"],
      ["cont", "past them!"],
      ["para", "You should quit"],
      ["line", "dawdling and get"],
      ["cont", "a move on!"]
    ],
    _Route22Rival1DefeatedText: [
      ["text", "Awww!"],
      ["line", "You just lucked"],
      ["cont", "out!"],
      ["prompt"]
    ],
    _Route22Rival1VictoryText: [
      ["text", "<RIVAL>: What?"],
      ["line", "Why do I have 2"],
      ["cont", "#MON?"],
      ["para", "You should catch"],
      ["cont", "some more too!"],
      ["prompt"]
    ],
    _Route22RivalBeforeBattleText2: [
      ["text", "<RIVAL>: What?"],
      ["line", "<PLAYER>! What a"],
      ["cont", "surprise to see"],
      ["cont", "you here!"],
      ["para", "So you're going to"],
      ["line", "#MON LEAGUE?"],
      ["para", "You collected all"],
      ["line", "the BADGEs too?"],
      ["cont", "That's cool!"],
      ["para", "Then I'll whip you"],
      ["line", "<PLAYER> as a"],
      ["cont", "warm up for"],
      ["cont", "#MON LEAGUE!"],
      ["para", "Come on!"]
    ],
    _Route22RivalAfterBattleText2: [
      ["text", "That loosened me"],
      ["line", "up! I'm ready for"],
      ["cont", "#MON LEAGUE!"],
      ["para", "<PLAYER>, you need"],
      ["line", "more practice!"],
      ["para", "But hey, you know"],
      ["line", "that! I'm out of"],
      ["cont", "here. Smell ya!"]
    ],
    _Route22Rival2DefeatedText: [
      ["text", "What!?"],
      ["para", "I was just"],
      ["line", "careless!"],
      ["prompt"]
    ],
    _Route22Rival2VictoryText: [
      ["text", "<RIVAL>: Hahaha!"],
      ["line", "<PLAYER>! That's"],
      ["cont", "your best? You're"],
      ["cont", "nowhere near as"],
      ["cont", "good as me, pal!"],
      ["para", "Go train some"],
      ["line", "more! You loser!"],
      ["prompt"]
    ],
    _Route22PokemonLeagueSignText: [
      ["text", "#MON LEAGUE"],
      ["line", "Front Gate"]
    ]
  }
};
