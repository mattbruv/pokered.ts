import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_B1F_BLOCKS } from "../data/blocks/SSAnneB1F";

export const SSAnneB1F: Map = {
  width: 15,
  height: 4,
  borderBlock: 12,
  blocks: SS_ANNE_B1F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 23, y: 3, toMap: MapName.SSAnneB1FRooms, warpIndex: 8 },
      { x: 19, y: 3, toMap: MapName.SSAnneB1FRooms, warpIndex: 6 },
      { x: 15, y: 3, toMap: MapName.SSAnneB1FRooms, warpIndex: 4 },
      { x: 11, y: 3, toMap: MapName.SSAnneB1FRooms, warpIndex: 2 },
      { x: 7, y: 3, toMap: MapName.SSAnneB1FRooms, warpIndex: 0 },
      { x: 27, y: 5, toMap: MapName.SSAnne1F, warpIndex: 9 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
