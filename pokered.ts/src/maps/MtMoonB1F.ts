import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_B1F_BLOCKS } from "../data/blocks/MtMoonB1F";
import { OverworldSprite } from "../sprite";

export const MtMoonB1F: Map = {
  width: 14,
  height: 14,
  borderBlock: 3,
  blocks: MT_MOON_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 5, toMap: MapName.MtMoon1F, warpIndex: 2 },
      { x: 17, y: 11, toMap: MapName.MtMoonB2F, warpIndex: 0 },
      { x: 25, y: 9, toMap: MapName.MtMoon1F, warpIndex: 3 },
      { x: 25, y: 15, toMap: MapName.MtMoon1F, warpIndex: 4 },
      { x: 21, y: 17, toMap: MapName.MtMoonB2F, warpIndex: 1 },
      { x: 13, y: 27, toMap: MapName.MtMoonB2F, warpIndex: 2 },
      { x: 23, y: 3, toMap: MapName.MtMoonB2F, warpIndex: 3 },
      { x: 27, y: 3, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
