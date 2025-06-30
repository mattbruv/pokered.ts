import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_CITY_BLOCKS } from "../data/blocks/VermilionCity";
import { OverworldSprite } from "../sprite";

export const VermilionCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 67,
  blocks: VERMILION_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route6, yOffset: 5 },
    east: { map: MapName.Route11, xOffset: 4 }
  },
  objects: {
    warps: [
      { x: 11, y: 3, toMap: MapName.VermilionPokecenter, warpIndex: 0 },
      { x: 9, y: 13, toMap: MapName.PokemonFanClub, warpIndex: 0 },
      { x: 23, y: 13, toMap: MapName.VermilionMart, warpIndex: 0 },
      { x: 12, y: 19, toMap: MapName.VermilionGym, warpIndex: 0 },
      { x: 23, y: 19, toMap: MapName.VermilionPidgeyHouse, warpIndex: 0 },
      { x: 18, y: 31, toMap: MapName.VermilionDock, warpIndex: 0 },
      { x: 19, y: 31, toMap: MapName.VermilionDock, warpIndex: 0 },
      { x: 15, y: 13, toMap: MapName.VermilionTradeHouse, warpIndex: 0 },
      { x: 7, y: 3, toMap: MapName.VermilionOldRodHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 27, y: 3, signId: "TEXT_VERMILIONCITY_SIGN" },
      { x: 37, y: 13, signId: "TEXT_VERMILIONCITY_NOTICE_SIGN" },
      { x: 24, y: 13, signId: "TEXT_VERMILIONCITY_MART_SIGN" },
      { x: 12, y: 3, signId: "TEXT_VERMILIONCITY_POKECENTER_SIGN" },
      { x: 7, y: 13, signId: "TEXT_VERMILIONCITY_POKEMON_FAN_CLUB_SIGN" },
      { x: 7, y: 19, signId: "TEXT_VERMILIONCITY_GYM_SIGN" },
      { x: 29, y: 15, signId: "TEXT_VERMILIONCITY_HARBOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 19,
        y: 7,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "WALK",
        textId: "TEXT_VERMILIONCITY_BEAUTY"
      },
      {
        type: "sprite",
        x: 14,
        y: 6,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_VERMILIONCITY_GAMBLER1"
      },
      {
        type: "sprite",
        x: 19,
        y: 30,
        sprite: OverworldSprite.SPRITE_SAILOR,
        movement: "STAY",
        textId: "TEXT_VERMILIONCITY_SAILOR1"
      },
      {
        type: "sprite",
        x: 30,
        y: 7,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_VERMILIONCITY_GAMBLER2"
      },
      {
        type: "sprite",
        x: 29,
        y: 9,
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "WALK",
        textId: "TEXT_VERMILIONCITY_MACHOP"
      },
      {
        type: "sprite",
        x: 25,
        y: 27,
        sprite: OverworldSprite.SPRITE_SAILOR,
        movement: "WALK",
        textId: "TEXT_VERMILIONCITY_SAILOR2"
      }
    ]
  },
  textPointers: []
};
