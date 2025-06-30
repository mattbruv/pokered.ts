import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_NORTH_SOUTH_BLOCKS } from "../data/blocks/UndergroundPathNorthSouth";
import { OverworldSprite } from "../sprite";

export const UndergroundPathNorthSouth: Map = {
  width: 4,
  height: 24,
  borderBlock: 1,
  blocks: UNDERGROUND_PATH_NORTH_SOUTH_BLOCKS,
  tileset: Tileset.UNDERGROUND,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 4, toMap: MapName.UndergroundPathRoute5, warpIndex: 2 },
      { x: 2, y: 41, toMap: MapName.UndergroundPathRoute6, warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
