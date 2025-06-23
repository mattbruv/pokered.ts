import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_ISLAND_BLOCKS } from "../data/blocks/CinnabarIsland";

export const CinnabarIsland: Map = {
  width: 10,
  height: 9,
  blocks: CINNABAR_ISLAND_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route21, yOffset: 0 },
  east: { map: MapName.Route20, xOffset: 0 }
},
  object: {},
  textPointers: [],
};
