import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_ISLAND_BLOCKS } from "../data/blocks/CinnabarIsland";
import { OverworldSprite } from "../sprite";

export const CinnabarIsland: Map = {
  width: 10,
  height: 9,
  borderBlock: 67,
  blocks: CINNABAR_ISLAND_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route21, xOffset: 0 },
    east: { map: MapName.Route20, yOffset: 0 }
  },
  objects: {
    warps: [
      { x: 6, y: 3, toMap: MapName.PokemonMansion1F, warpIndex: 1 },
      { x: 18, y: 3, toMap: MapName.CinnabarGym, warpIndex: 0 },
      { x: 6, y: 9, toMap: MapName.CinnabarLab, warpIndex: 0 },
      { x: 11, y: 11, toMap: MapName.CinnabarPokecenter, warpIndex: 0 },
      { x: 15, y: 11, toMap: MapName.CinnabarMart, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 9, y: 5, signId: "TEXT_CINNABARISLAND_SIGN" },
      { x: 16, y: 11, signId: "TEXT_CINNABARISLAND_MART_SIGN" },
      { x: 12, y: 11, signId: "TEXT_CINNABARISLAND_POKECENTER_SIGN" },
      { x: 9, y: 11, signId: "TEXT_CINNABARISLAND_POKEMONLAB_SIGN" },
      { x: 13, y: 3, signId: "TEXT_CINNABARISLAND_GYM_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 12,
        y: 5,
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_CINNABARISLAND_GIRL"
      },
      {
        type: "sprite",
        x: 14,
        y: 6,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_CINNABARISLAND_GAMBLER"
      }
    ]
  },
  textPointers: []
};
