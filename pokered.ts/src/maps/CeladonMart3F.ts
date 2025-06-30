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
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_CLERK"
      },
      {
        type: "sprite",
        x: 11,
        y: 6,
        sprite: OverworldSprite.SPRITE_GAMEBOY_KID,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_GAMEBOY_KID1"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        sprite: OverworldSprite.SPRITE_GAMEBOY_KID,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_GAMEBOY_KID2"
      },
      {
        type: "sprite",
        x: 8,
        y: 2,
        sprite: OverworldSprite.SPRITE_GAMEBOY_KID,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_GAMEBOY_KID3"
      },
      {
        type: "sprite",
        x: 2,
        y: 5,
        sprite: OverworldSprite.SPRITE_LITTLE_BOY,
        movement: "STAY",
        textId: "TEXT_CELADONMART3F_LITTLE_BOY"
      }
    ]
  },
  textPointers: []
};
