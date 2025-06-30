import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DIGLETTS_CAVE_ROUTE_2_BLOCKS } from "../data/blocks/DiglettsCaveRoute2";

export const DiglettsCaveRoute2: Map = {
  width: 4,
  height: 4,
  borderBlock: 125,
  blocks: DIGLETTS_CAVE_ROUTE_2_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 4, y: 4, toMap: MapName.DiglettsCave, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 3,
        sprite: "SPRITE_FISHING_GURU",
        movement: "STAY",
        textId: "TEXT_DIGLETTSCAVEROUTE2_FISHING_GURU"
      }
    ]
  },
  textPointers: []
};
