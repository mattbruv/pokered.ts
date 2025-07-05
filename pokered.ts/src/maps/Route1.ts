import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_1_BLOCKS } from "../data/blocks/Route1";
import { OverworldSprite } from "../sprite";

export const Route1: Map = {
  width: 10,
  height: 18,
  borderBlock: 11,
  blocks: ROUTE_1_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.ViridianCity, xOffset: -5 },
    south: { map: MapName.PalletTown, xOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [{ x: 9, y: 27, signId: "TEXT_ROUTE1_SIGN" }],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 24,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_ROUTE1_YOUNGSTER1"
      },
      {
        type: "sprite",
        x: 15,
        y: 13,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_ROUTE1_YOUNGSTER2"
      }
    ]
  },
  textPointers: []
};
