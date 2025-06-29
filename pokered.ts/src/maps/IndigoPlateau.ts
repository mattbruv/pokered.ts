import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { INDIGO_PLATEAU_BLOCKS } from "../data/blocks/IndigoPlateau";

export const IndigoPlateau: Map = {
  width: 10,
  height: 9,
  borderBlock: 14,
  blocks: INDIGO_PLATEAU_BLOCKS,
  tileset: Tileset.PLATEAU,
  connections: {
    south: { map: MapName.Route23, yOffset: 0 }
  },
  objects: {
    warps: [
      { x: 9, y: 5, toMap: "INDIGO_PLATEAU_LOBBY", warpId: 1 },
      { x: 10, y: 5, toMap: "INDIGO_PLATEAU_LOBBY", warpId: 1 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
