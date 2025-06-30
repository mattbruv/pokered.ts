import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_WEST_BLOCKS } from "../data/blocks/SafariZoneWest";

export const SafariZoneWest: Map = {
  width: 15,
  height: 13,
  borderBlock: 0,
  blocks: SAFARI_ZONE_WEST_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  objects: {
    warps: [
      { x: 20, y: 0, toMap: MapName.SafariZoneNorth, warpId: 1 },
      { x: 21, y: 0, toMap: MapName.SafariZoneNorth, warpId: 2 },
      { x: 26, y: 0, toMap: MapName.SafariZoneNorth, warpId: 3 },
      { x: 27, y: 0, toMap: MapName.SafariZoneNorth, warpId: 4 },
      { x: 29, y: 22, toMap: MapName.SafariZoneCenter, warpId: 3 },
      { x: 29, y: 23, toMap: MapName.SafariZoneCenter, warpId: 4 },
      { x: 3, y: 3, toMap: MapName.SafariZoneSecretHouse, warpId: 1 },
      { x: 11, y: 11, toMap: MapName.SafariZoneWestRestHouse, warpId: 1 }
    ],
    backgroundItems: [
      { x: 12, y: 12, signId: "TEXT_SAFARIZONEWEST_REST_HOUSE_SIGN" },
      { x: 17, y: 3, signId: "TEXT_SAFARIZONEWEST_FIND_WARDENS_TEETH_SIGN" },
      { x: 26, y: 4, signId: "TEXT_SAFARIZONEWEST_TRAINER_TIPS" },
      { x: 24, y: 22, signId: "TEXT_SAFARIZONEWEST_SIGN" }
    ],
    objects: [
      {
        type: "item",
        x: 8,
        y: 20,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEWEST_MAX_POTION",
        itemId: "MAX_POTION"
      },
      {
        type: "item",
        x: 9,
        y: 7,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEWEST_TM_DOUBLE_TEAM",
        itemId: "TM_DOUBLE_TEAM"
      },
      {
        type: "item",
        x: 18,
        y: 18,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEWEST_MAX_REVIVE",
        itemId: "MAX_REVIVE"
      },
      {
        type: "item",
        x: 19,
        y: 7,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEWEST_GOLD_TEETH",
        itemId: "GOLD_TEETH"
      }
    ]
  },
  textPointers: []
};
