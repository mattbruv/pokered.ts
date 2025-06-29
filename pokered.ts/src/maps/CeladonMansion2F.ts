import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_2F_BLOCKS } from "../data/blocks/CeladonMansion2F";

export const CeladonMansion2F: Map = {
  width: 4,
  height: 6,
  borderBlock: 15,
  blocks: CELADON_MANSION_2F_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  objects: {
    warps: [
      { x: 6, y: 1, toMap: "CELADON_MANSION_3F", warpId: 1 },
      { x: 7, y: 1, toMap: "CELADON_MANSION_1F", warpId: 4 },
      { x: 2, y: 1, toMap: "CELADON_MANSION_1F", warpId: 5 },
      { x: 4, y: 1, toMap: "CELADON_MANSION_3F", warpId: 4 }
    ],
    backgroundItems: [
      { x: 4, y: 9, signId: "TEXT_CELADONMANSION2F_MEETING_ROOM_SIGN" }
    ],
    objects: []
  },
  textPointers: []
};
