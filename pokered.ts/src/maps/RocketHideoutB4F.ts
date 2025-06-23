import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B4F_BLOCKS } from "../data/blocks/RocketHideoutB4F";

export const RocketHideoutB4F: Map = {
  width: 15,
  height: 12,
  blocks: ROCKET_HIDEOUT_B4F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
};
