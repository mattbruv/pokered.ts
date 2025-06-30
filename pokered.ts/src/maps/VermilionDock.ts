import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_DOCK_BLOCKS } from "../data/blocks/VermilionDock";
import { OverworldSprite } from "../sprite";

export const VermilionDock: Map = {
  width: 14,
  height: 6,
  borderBlock: 15,
  blocks: VERMILION_DOCK_BLOCKS,
  tileset: Tileset.SHIP_PORT,
  connections: {},
  objects: {
    warps: [
      { x: 14, y: 0, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 14, y: 2, toMap: MapName.SSAnne1F, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: []
  },
  textPointers: []
};
