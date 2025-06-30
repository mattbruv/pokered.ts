import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_EAST_BLOCKS } from "../data/blocks/SafariZoneEast";

export const SafariZoneEast: Map = {
  width: 15,
  height: 13,
  borderBlock: 0,
  blocks: SAFARI_ZONE_EAST_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 4, toMap: MapName.SafariZoneNorth, warpId: 7 },
      { x: 0, y: 5, toMap: MapName.SafariZoneNorth, warpId: 8 },
      { x: 0, y: 22, toMap: MapName.SafariZoneCenter, warpId: 7 },
      { x: 0, y: 23, toMap: MapName.SafariZoneCenter, warpId: 7 },
      { x: 25, y: 9, toMap: MapName.SafariZoneEastRestHouse, warpId: 1 }
    ],
    backgroundItems: [
      { x: 26, y: 10, signId: "TEXT_SAFARIZONEEAST_REST_HOUSE_SIGN" },
      { x: 6, y: 4, signId: "TEXT_SAFARIZONEEAST_TRAINER_TIPS" },
      { x: 5, y: 23, signId: "TEXT_SAFARIZONEEAST_SIGN" }
    ],
    objects: [
      {
        type: "item",
        x: 21,
        y: 10,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEEAST_FULL_RESTORE",
        itemId: "FULL_RESTORE"
      },
      {
        type: "item",
        x: 3,
        y: 7,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEEAST_MAX_RESTORE",
        itemId: "MAX_POTION"
      },
      {
        type: "item",
        x: 20,
        y: 13,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEEAST_CARBOS",
        itemId: "CARBOS"
      },
      {
        type: "item",
        x: 15,
        y: 12,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_SAFARIZONEEAST_TM_EGG_BOMB",
        itemId: "TM_EGG_BOMB"
      }
    ]
  },
  textPointers: []
};
