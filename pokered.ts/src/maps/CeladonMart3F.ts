import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_3F_BLOCKS } from "../data/blocks/CeladonMart3F";
import { OverworldSprite } from "../sprite";

export const CeladonMart3F: Map = {
  width: 10,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_MART_3F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 12, y: 1, toMap: MapName.CeladonMart4F, warpIndex: 0 },
      { x: 16, y: 1, toMap: MapName.CeladonMart2F, warpIndex: 1 },
      { x: 1, y: 1, toMap: MapName.CeladonMartElevator, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 2, y: 4, signId: "TEXT_CELADONMART3F_SNES1" },
      { x: 3, y: 4, signId: "TEXT_CELADONMART3F_RPG" },
      { x: 5, y: 4, signId: "TEXT_CELADONMART3F_SNES2" },
      { x: 6, y: 4, signId: "TEXT_CELADONMART3F_SPORTS_GAME" },
      { x: 2, y: 6, signId: "TEXT_CELADONMART3F_SNES3" },
      { x: 3, y: 6, signId: "TEXT_CELADONMART3F_PUZZLE_GAME" },
      { x: 5, y: 6, signId: "TEXT_CELADONMART3F_SNES4" },
      { x: 6, y: 6, signId: "TEXT_CELADONMART3F_FIGHTING_GAME" },
      { x: 14, y: 1, signId: "TEXT_CELADONMART3F_CURRENT_FLOOR_SIGN" },
      { x: 4, y: 1, signId: "TEXT_CELADONMART3F_POKEMON_POSTER1" },
      { x: 6, y: 1, signId: "TEXT_CELADONMART3F_POKEMON_POSTER2" },
      { x: 10, y: 1, signId: "TEXT_CELADONMART3F_POKEMON_POSTER3" }
    ],
    objects: [
      {
        type: "sprite",
        x: 16,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_CLERK"
      },
      {
        type: "sprite",
        x: 11,
        y: 6,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GAMEBOY_KID,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_GAMEBOY_KID1"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GAMEBOY_KID,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_GAMEBOY_KID2"
      },
      {
        type: "sprite",
        x: 8,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GAMEBOY_KID,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_GAMEBOY_KID3"
      },
      {
        type: "sprite",
        x: 2,
        y: 5,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_LITTLE_BOY,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_LITTLE_BOY"
      }
    ]
  },
  text: {
    _CeladonMart3FClerkTM18PreReceiveText: [
      ["text", "Oh, hi! I finally"],
      ["line", "finished #MON!"],
      ["para", "Not done yet?"],
      ["line", "This might be"],
      ["cont", "useful!"],
      ["prompt"]
    ],
    _CeladonMart3FClerkReceivedTM18Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _CeladonMart3FClerkTM18ExplanationText: [
      ["text", "TM18 is COUNTER!"],
      ["line", "Not like the one"],
      ["cont", "I'm leaning on,"],
      ["cont", "mind you!"]
    ],
    _CeladonMart3FClerkTM18NoRoomText: [
      ["text", "Your pack is full"],
      ["line", "of items!"]
    ],
    _CeladonMart3FGameBoyKid1Text: [
      ["text", "Captured #MON"],
      ["line", "are registered"],
      ["cont", "with an ID No."],
      ["cont", "and OT, the name"],
      ["cont", "of the Original"],
      ["cont", "Trainer that"],
      ["cont", "caught it!"]
    ],
    _CeladonMart3FGameBoyKid2Text: [
      ["text", "All right!"],
      ["para", "My buddy's going"],
      ["line", "to trade me his"],
      ["cont", "KANGASKHAN for my"],
      ["cont", "GRAVELER!"]
    ],
    _CeladonMart3FGameBoyKid3Text: [
      ["text", "Come on GRAVELER!"],
      ["para", "I love GRAVELER!"],
      ["line", "I collect them!"],
      ["para", "Huh?"],
      ["para", "GRAVELER turned"],
      ["line", "into a different"],
      ["cont", "#MON!"]
    ],
    _CeladonMart3FLittleBoyText: [
      ["text", "You can identify"],
      ["line", "#MON you got"],
      ["cont", "in trades by"],
      ["cont", "their ID Numbers!"]
    ],
    _CeladonMart3FSNESText: [["text", "It's an SNES!"]],
    _CeladonMart3FRPGText: [
      ["text", "An RPG! There's"],
      ["line", "no time for that!"]
    ],
    _CeladonMart3FSportsGameText: [
      ["text", "A sports game!"],
      ["line", "Dad'll like that!"]
    ],
    _CeladonMart3FPuzzleGameText: [
      ["text", "A puzzle game!"],
      ["line", "Looks addictive!"]
    ],
    _CeladonMart3FFightingGameText: [
      ["text", "A fighting game!"],
      ["line", "Looks tough!"]
    ],
    _CeladonMart3FCurrentFloorSignText: [["text", "3F: TV GAME SHOP"]],
    _CeladonMart3FPokemonPosterText: [
      ["text", "Red and Blue!"],
      ["line", "Both are #MON!"]
    ]
  }
};
