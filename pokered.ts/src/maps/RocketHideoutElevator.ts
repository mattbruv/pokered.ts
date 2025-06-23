import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_ELEVATOR_BLOCKS } from "../data/blocks/RocketHideoutElevator";

export const RocketHideoutElevator: Map = {
  width: 3,
  height: 4,
  blocks: ROCKET_HIDEOUT_ELEVATOR_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  object: {},
  textPointers: [],
};
