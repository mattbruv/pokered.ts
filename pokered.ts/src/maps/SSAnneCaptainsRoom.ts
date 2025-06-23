import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_CAPTAINS_ROOM_BLOCKS } from "../data/blocks/SSAnneCaptainsRoom";

export const SSAnneCaptainsRoom: Map = {
  width: 3,
  height: 4,
  blocks: SS_ANNE_CAPTAINS_ROOM_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
};
