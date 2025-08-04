import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_3F_BLOCKS } from "../data/blocks/CeladonMansion3F";
import { OverworldSprite } from "../sprite";

export const CeladonMansion3F: Map = {
  width: 4,
  height: 6,
  borderBlock: 15,
  blocks: CELADON_MANSION_3F_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  objects: {
    warps: [
      { x: 6, y: 1, toMap: MapName.CeladonMansion2F, warpIndex: 0 },
      { x: 7, y: 1, toMap: MapName.CeladonMansionRoof, warpIndex: 0 },
      { x: 2, y: 1, toMap: MapName.CeladonMansionRoof, warpIndex: 1 },
      { x: 4, y: 1, toMap: MapName.CeladonMansion2F, warpIndex: 3 }
    ],
    backgroundItems: [
      { x: 1, y: 3, signId: "TEXT_CELADONMANSION3F_GAME_PROGRAM_PC" },
      { x: 4, y: 3, signId: "TEXT_CELADONMANSION3F_PLAYING_GAME_PC" },
      { x: 1, y: 6, signId: "TEXT_CELADONMANSION3F_GAME_SCRIPT_PC" },
      { x: 4, y: 9, signId: "TEXT_CELADONMANSION3F_DEV_ROOM_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 4,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_BIKE_SHOP_CLERK,
        movement: "STAY",
        textId: "TEXT_CELADONMANSION3F_PROGRAMMER"
      },
      {
        type: "sprite",
        x: 3,
        y: 4,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CELADONMANSION3F_GRAPHIC_ARTIST"
      },
      {
        type: "sprite",
        x: 0,
        y: 7,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CELADONMANSION3F_WRITER"
      },
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_CELADONMANSION3F_GAME_DESIGNER"
      }
    ]
  },
  text: {
    _CeladonMansion3FProgrammerText: [
      ["text", "Me? I'm the"],
      ["line", "programmer!"]
    ],
    _CeladonMansion3FGraphicArtistText: [
      ["text", "I'm the graphic"],
      ["line", "artist!"],
      ["cont", "I drew you!"]
    ],
    _CeladonMansion3FWriterText: [
      ["text", "I wrote the story!"],
      ["line", "Isn't ERIKA cute?"],
      ["para", "I like MISTY a"],
      ["line", "lot too!"],
      ["para", "Oh, and SABRINA,"],
      ["line", "I like her!"]
    ],
    _CeladonMansion3FGameDesignerText: [
      ["text", "Is that right?"],
      ["para", "I'm the game"],
      ["line", "designer!"],
      ["para", "Filling up your"],
      ["line", "#DEX is tough,"],
      ["cont", "but don't quit!"],
      ["para", "When you finish,"],
      ["line", "come tell me!"]
    ],
    _CeladonMansion3FGameDesignerCompletedDexText: [
      ["text", "Wow! Excellent!"],
      ["line", "You completed"],
      ["cont", "your #DEX!"],
      ["cont", "Congratulations!"],
      ["cont", "...@"],
      ["text_end"]
    ],
    _CeladonMansion3FGameProgramPCText: [
      ["text", "It's the game"],
      ["line", "program! Messing"],
      ["cont", "with it could bug"],
      ["cont", "out the game!"]
    ],
    _CeladonMansion3FPlayingGamePCText: [
      ["text", "Someone's playing"],
      ["line", "a game instead of"],
      ["cont", "working!"]
    ],
    _CeladonMansion3FGameScriptPCText: [
      ["text", "It's the script!"],
      ["line", "Better not look"],
      ["cont", "at the ending!"]
    ],
    _CeladonMansion3FDevRoomSignText: [
      ["text", "GAME FREAK"],
      ["line", "Development Room"]
    ]
  }
};
