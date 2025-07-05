import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_7_BLOCKS } from "../data/blocks/Route7";
import { OverworldSprite } from "../sprite";

export const Route7: Map = {
  width: 10,
  height: 9,
  borderBlock: 15,
  blocks: ROUTE_7_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.CeladonCity, yOffset: -4 },
    east: { map: MapName.SaffronCity, yOffset: -4 }
  },
  objects: {
    warps: [
      { x: 18, y: 9, toMap: MapName.Route7Gate, warpIndex: 2 },
      { x: 18, y: 10, toMap: MapName.Route7Gate, warpIndex: 3 },
      { x: 11, y: 9, toMap: MapName.Route7Gate, warpIndex: 0 },
      { x: 11, y: 10, toMap: MapName.Route7Gate, warpIndex: 1 },
      { x: 5, y: 13, toMap: MapName.UndergroundPathRoute7, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 3, y: 13, signId: "TEXT_ROUTE7_UNDERGROUND_PATH_SIGN" }
    ],
    objects: []
  },
  textPointers: []
};
