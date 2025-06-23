import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DIGLETTS_CAVE_ROUTE_2_BLOCKS } from "../data/blocks/DiglettsCaveRoute2";

export const DiglettsCaveRoute2: Map = {
  width: 4,
  height: 4,
  blocks: DIGLETTS_CAVE_ROUTE_2_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
