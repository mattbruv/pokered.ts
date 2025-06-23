import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B1F_BLOCKS } from "../data/blocks/RocketHideoutB1F";

export const RocketHideoutB1F: Map = {
  width: 15,
  height: 14,
  blocks: ROCKET_HIDEOUT_B1F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
};
