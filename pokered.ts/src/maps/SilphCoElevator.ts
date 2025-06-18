import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_ELEVATOR_BLOCKS } from "../data/blocks/SilphCoElevator";

export const SilphCoElevator: Map = {
  width: 2,
  height: 2,
  blocks: SILPH_CO_ELEVATOR_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
