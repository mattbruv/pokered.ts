import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B3F_BLOCKS } from "../data/blocks/RocketHideoutB3F";

export const RocketHideoutB3F: Map = {
  width: 15,
  height: 14,
  blocks: ROCKET_HIDEOUT_B3F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
