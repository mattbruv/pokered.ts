import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DIGLETTS_CAVE_ROUTE_11_BLOCKS } from "../data/blocks/DiglettsCaveRoute11";

export const DiglettsCaveRoute11: Map = {
  width: 4,
  height: 4,
  borderBlock: 125,
  blocks: DIGLETTS_CAVE_ROUTE_11_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 5 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 5 },
      { x: 4, y: 4, toMap: "DIGLETTS_CAVE", warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: "SPRITE_GAMBLER",
        movement: "STAY",
        textId: "TEXT_DIGLETTSCAVEROUTE11_GAMBLER"
      }
    ]
  },
  textPointers: []
};
