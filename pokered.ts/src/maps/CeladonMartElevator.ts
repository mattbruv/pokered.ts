import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_ELEVATOR_BLOCKS } from "../data/blocks/CeladonMartElevator";
import { OverworldSprite } from "../sprite";

export const CeladonMartElevator: Map = {
  width: 2,
  height: 2,
  borderBlock: 15,
  blocks: CELADON_MART_ELEVATOR_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 1, y: 3, toMap: MapName.CeladonMart1F, warpIndex: 5 },
      { x: 2, y: 3, toMap: MapName.CeladonMart1F, warpIndex: 5 }
    ],
    backgroundItems: [{ x: 3, y: 0, signId: "TEXT_CELADONMARTELEVATOR" }],
    objects: []
  },
  textPointers: []
};
