import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_22_BLOCKS } from "../data/blocks/Route22";

export const Route22: Map = {
  width: 20,
  height: 9,
  borderBlock: 44,
  blocks: ROUTE_22_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route23, yOffset: 0 },
    east: { map: MapName.ViridianCity, xOffset: -4 }
  },
  objects: {
    warps: [{ x: 8, y: 5, toMap: MapName.Route22Gate, warpIndex: 0 }],
    backgroundItems: [
      { x: 7, y: 11, signId: "TEXT_ROUTE22_POKEMON_LEAGUE_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 25,
        y: 5,
        sprite: "SPRITE_BLUE",
        movement: "STAY",
        textId: "TEXT_ROUTE22_RIVAL1"
      },
      {
        type: "sprite",
        x: 25,
        y: 5,
        sprite: "SPRITE_BLUE",
        movement: "STAY",
        textId: "TEXT_ROUTE22_RIVAL2"
      }
    ]
  },
  textPointers: []
};
