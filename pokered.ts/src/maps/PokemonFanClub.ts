import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_FAN_CLUB_BLOCKS } from "../data/blocks/PokemonFanClub";
import { OverworldSprite } from "../sprite";

export const PokemonFanClub: Map = {
  width: 4,
  height: 4,
  borderBlock: 13,
  blocks: POKEMON_FAN_CLUB_BLOCKS,
  tileset: Tileset.INTERIOR,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [
      { x: 1, y: 0, signId: "TEXT_POKEMONFANCLUB_SIGN_1" },
      { x: 6, y: 0, signId: "TEXT_POKEMONFANCLUB_SIGN_2" }
    ],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 3,
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_PIKACHU_FAN"
      },
      {
        type: "sprite",
        x: 1,
        y: 3,
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_SEEL_FAN"
      },
      {
        type: "sprite",
        x: 6,
        y: 4,
        sprite: OverworldSprite.SPRITE_FAIRY,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_PIKACHU"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: OverworldSprite.SPRITE_SEEL,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_SEEL"
      },
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_CHAIRMAN"
      },
      {
        type: "sprite",
        x: 5,
        y: 1,
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
