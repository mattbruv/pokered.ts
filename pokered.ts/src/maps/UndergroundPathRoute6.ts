import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_6_BLOCKS } from "../data/blocks/UndergroundPathRoute6";
import { OverworldSprite } from "../sprite";

export const UndergroundPathRoute6: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: UNDERGROUND_PATH_ROUTE_6_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 4, y: 4, toMap: MapName.UndergroundPathNorthSouth, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE6_GIRL"
      }
    ]
  },
  textPointers: []
};
