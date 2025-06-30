import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_ELEVATOR_BLOCKS } from "../data/blocks/RocketHideoutElevator";
import { OverworldSprite } from "../sprite";

export const RocketHideoutElevator: Map = {
  width: 3,
  height: 4,
  borderBlock: 15,
  blocks: ROCKET_HIDEOUT_ELEVATOR_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 1, toMap: MapName.RocketHideoutB1F, warpIndex: 2 },
      { x: 3, y: 1, toMap: MapName.RocketHideoutB1F, warpIndex: 4 }
    ],
    backgroundItems: [{ x: 1, y: 1, signId: "TEXT_ROCKETHIDEOUTELEVATOR" }],
    objects: []
  },
  textPointers: []
};
