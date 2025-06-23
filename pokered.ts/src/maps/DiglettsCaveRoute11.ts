import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DIGLETTS_CAVE_ROUTE_11_BLOCKS } from "../data/blocks/DiglettsCaveRoute11";

export const DiglettsCaveRoute11: Map = {
  width: 4,
  height: 4,
  blocks: DIGLETTS_CAVE_ROUTE_11_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
