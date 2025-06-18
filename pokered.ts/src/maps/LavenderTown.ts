import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_TOWN_BLOCKS } from "../data/blocks/LavenderTown";

export const LavenderTown: Map = {
  width: 10,
  height: 9,
  blocks: LAVENDER_TOWN_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
  north: { map: MapName.Route10, yOffset: 0 },
  south: { map: MapName.Route12, yOffset: 0 },
  west: { map: MapName.Route8, xOffset: 0 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
