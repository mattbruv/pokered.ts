import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_ROOF_BLOCKS } from "../data/blocks/CeladonMansionRoof";

export const CeladonMansionRoof: Map = {
  width: 4,
  height: 6,
  borderBlock: 9,
  blocks: CELADON_MANSION_ROOF_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  objects: {
    warps: [
      { x: 6, y: 1, toMap: "CELADON_MANSION_3F", warpId: 2 },
      { x: 2, y: 1, toMap: "CELADON_MANSION_3F", warpId: 3 },
      { x: 2, y: 7, toMap: "CELADON_MANSION_ROOF_HOUSE", warpId: 1 }
    ],
    backgroundItems: [
      { x: 3, y: 7, signId: "TEXT_CELADONMANSIONROOF_HOUSE_SIGN" }
    ],
    objects: []
  },
  textPointers: []
};
