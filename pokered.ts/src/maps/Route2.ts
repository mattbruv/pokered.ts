import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_2_BLOCKS } from "../data/blocks/Route2";
import { OverworldSprite } from "../sprite";

export const Route2: Map = {
  width: 10,
  height: 36,
  borderBlock: 15,
  blocks: ROUTE_2_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.PewterCity, xOffset: -5 },
    south: { map: MapName.ViridianCity, xOffset: -5 }
  },
  objects: {
    warps: [
      { x: 12, y: 9, toMap: MapName.DiglettsCaveRoute2, warpIndex: 0 },
      { x: 3, y: 11, toMap: MapName.ViridianForestNorthGate, warpIndex: 1 },
      { x: 15, y: 19, toMap: MapName.Route2TradeHouse, warpIndex: 0 },
      { x: 16, y: 35, toMap: MapName.Route2Gate, warpIndex: 1 },
      { x: 15, y: 39, toMap: MapName.Route2Gate, warpIndex: 2 },
      { x: 3, y: 43, toMap: MapName.ViridianForestSouthGate, warpIndex: 2 }
    ],
    backgroundItems: [
      { x: 5, y: 65, signId: "TEXT_ROUTE2_SIGN" },
      { x: 11, y: 11, signId: "TEXT_ROUTE2_DIGLETTS_CAVE_SIGN" }
    ],
    objects: [
      {
        type: "item",
        x: 13,
        y: 54,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE2_MOON_STONE",
        itemId: "MOON_STONE"
      },
      {
        type: "item",
        x: 13,
        y: 45,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE2_HP_UP",
        itemId: "HP_UP"
      }
    ]
  },
  text: {
    _Route2SignText: [
      ["text", "ROUTE 2"],
      ["line", "VIRIDIAN CITY -"],
      ["cont", "PEWTER CITY"]
    ],
    _Route2DiglettsCaveSignText: [["text", "DIGLETT's CAVE"]]
  }
};
