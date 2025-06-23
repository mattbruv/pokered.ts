import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_DOCK_BLOCKS } from "../data/blocks/VermilionDock";

export const VermilionDock: Map = {
  width: 14,
  height: 6,
  blocks: VERMILION_DOCK_BLOCKS,
  tileset: Tileset.SHIP_PORT,
  connections: {},
  object: {},
  textPointers: [],
};
