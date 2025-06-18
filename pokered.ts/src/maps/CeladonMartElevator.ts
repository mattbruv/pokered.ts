import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_ELEVATOR_BLOCKS } from "../data/blocks/CeladonMartElevator";

export const CeladonMartElevator: Map = {
  width: 2,
  height: 2,
  blocks: CELADON_MART_ELEVATOR_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
