import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_ELEVATOR_BLOCKS } from "../data/blocks/SilphCoElevator";
import { OverworldSprite } from "../sprite";

export const SilphCoElevator: Map = {
  width: 2,
  height: 2,
  borderBlock: 15,
  blocks: SILPH_CO_ELEVATOR_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 1, y: 3, toMap: "UNUSED_MAP_ED", warpIndex: 0 },
      { x: 2, y: 3, toMap: "UNUSED_MAP_ED", warpIndex: 0 }
    ],
    backgroundItems: [{ x: 3, y: 0, signId: "TEXT_SILPHCOELEVATOR_ELEVATOR" }],
    objects: []
  },
  textPointers: []
};
