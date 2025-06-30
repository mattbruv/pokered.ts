import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DIGLETTS_CAVE_BLOCKS } from "../data/blocks/DiglettsCave";
import { OverworldSprite } from "../sprite";

export const DiglettsCave: Map = {
  width: 20,
  height: 18,
  borderBlock: 25,
  blocks: DIGLETTS_CAVE_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 5, toMap: MapName.DiglettsCaveRoute2, warpIndex: 2 },
      { x: 37, y: 31, toMap: MapName.DiglettsCaveRoute11, warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
