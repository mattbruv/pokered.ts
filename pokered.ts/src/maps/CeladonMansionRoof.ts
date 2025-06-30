import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_ROOF_BLOCKS } from "../data/blocks/CeladonMansionRoof";
import { OverworldSprite } from "../sprite";

export const CeladonMansionRoof: Map = {
  width: 4,
  height: 6,
  borderBlock: 9,
  blocks: CELADON_MANSION_ROOF_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  objects: {
    warps: [
      { x: 6, y: 1, toMap: MapName.CeladonMansion3F, warpIndex: 1 },
      { x: 2, y: 1, toMap: MapName.CeladonMansion3F, warpIndex: 2 },
      { x: 2, y: 7, toMap: MapName.CeladonMansionRoofHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 3, y: 7, signId: "TEXT_CELADONMANSIONROOF_HOUSE_SIGN" }
    ],
    objects: []
  },
  textPointers: []
};
