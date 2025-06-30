import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_CENTER_BLOCKS } from "../data/blocks/SafariZoneCenter";
import { OverworldSprite } from "../sprite";

export const SafariZoneCenter: Map = {
  width: 15,
  height: 13,
  borderBlock: 0,
  blocks: SAFARI_ZONE_CENTER_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  objects: {
    warps: [
      { x: 14, y: 25, toMap: MapName.SafariZoneGate, warpIndex: 2 },
      { x: 15, y: 25, toMap: MapName.SafariZoneGate, warpIndex: 3 },
      { x: 0, y: 10, toMap: MapName.SafariZoneWest, warpIndex: 4 },
      { x: 0, y: 11, toMap: MapName.SafariZoneWest, warpIndex: 5 },
      { x: 14, y: 0, toMap: MapName.SafariZoneNorth, warpIndex: 4 },
      { x: 15, y: 0, toMap: MapName.SafariZoneNorth, warpIndex: 5 },
      { x: 29, y: 10, toMap: MapName.SafariZoneEast, warpIndex: 2 },
      { x: 29, y: 11, toMap: MapName.SafariZoneEast, warpIndex: 3 },
      { x: 17, y: 19, toMap: MapName.SafariZoneCenterRestHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 18, y: 20, signId: "TEXT_SAFARIZONECENTER_REST_HOUSE_SIGN" },
      { x: 14, y: 22, signId: "TEXT_SAFARIZONECENTER_TRAINER_TIPS_SIGN" }
    ],
    objects: [
      {
        type: "item",
        x: 14,
        y: 10,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SAFARIZONECENTER_NUGGET",
        itemId: "NUGGET"
      }
    ]
  },
  textPointers: []
};
