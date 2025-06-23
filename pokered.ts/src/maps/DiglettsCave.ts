import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DIGLETTS_CAVE_BLOCKS } from "../data/blocks/DiglettsCave";

export const DiglettsCave: Map = {
  width: 4,
  height: 4,
  blocks: DIGLETTS_CAVE_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
