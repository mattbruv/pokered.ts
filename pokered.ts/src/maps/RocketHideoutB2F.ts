import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B2F_BLOCKS } from "../data/blocks/RocketHideoutB2F";

export const RocketHideoutB2F: Map = {
  width: 15,
  height: 14,
  blocks: ROCKET_HIDEOUT_B2F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
};
