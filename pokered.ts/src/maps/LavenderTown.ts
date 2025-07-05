import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_TOWN_BLOCKS } from "../data/blocks/LavenderTown";
import { OverworldSprite } from "../sprite";

export const LavenderTown: Map = {
  width: 10,
  height: 9,
  borderBlock: 44,
  blocks: LAVENDER_TOWN_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route10, xOffset: 0 },
    south: { map: MapName.Route12, xOffset: 0 },
    west: { map: MapName.Route8, yOffset: 0 }
  },
  objects: {
    warps: [
      { x: 3, y: 5, toMap: MapName.LavenderPokecenter, warpIndex: 0 },
      { x: 14, y: 5, toMap: MapName.PokemonTower1F, warpIndex: 0 },
      { x: 7, y: 9, toMap: MapName.MrFujisHouse, warpIndex: 0 },
      { x: 15, y: 13, toMap: MapName.LavenderMart, warpIndex: 0 },
      { x: 3, y: 13, toMap: MapName.LavenderCuboneHouse, warpIndex: 0 },
      { x: 7, y: 13, toMap: MapName.NameRatersHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 11, y: 9, signId: "TEXT_LAVENDERTOWN_SIGN" },
      { x: 9, y: 3, signId: "TEXT_LAVENDERTOWN_SILPH_SCOPE_SIGN" },
      { x: 16, y: 13, signId: "TEXT_LAVENDERTOWN_MART_SIGN" },
      { x: 4, y: 5, signId: "TEXT_LAVENDERTOWN_POKECENTER_SIGN" },
      { x: 5, y: 9, signId: "TEXT_LAVENDERTOWN_POKEMON_HOUSE_SIGN" },
      { x: 17, y: 7, signId: "TEXT_LAVENDERTOWN_POKEMON_TOWER_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 15,
        y: 9,
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "WALK",
        textId: "TEXT_LAVENDERTOWN_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 9,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_LAVENDERTOWN_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 8,
        y: 7,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "WALK",
        textId: "TEXT_LAVENDERTOWN_SUPER_NERD"
      }
    ]
  },
  textPointers: []
};
