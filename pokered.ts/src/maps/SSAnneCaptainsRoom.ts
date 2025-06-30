import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_CAPTAINS_ROOM_BLOCKS } from "../data/blocks/SSAnneCaptainsRoom";

export const SSAnneCaptainsRoom: Map = {
  width: 3,
  height: 4,
  borderBlock: 12,
  blocks: SS_ANNE_CAPTAINS_ROOM_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [{ x: 0, y: 7, toMap: MapName.SSAnne2F, warpIndex: 8 }],
    backgroundItems: [
      { x: 4, y: 1, signId: "TEXT_SSANNECAPTAINSROOM_TRASH" },
      { x: 1, y: 2, signId: "TEXT_SSANNECAPTAINSROOM_SEASICK_BOOK" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: "SPRITE_CAPTAIN",
        movement: "STAY",
        textId: "TEXT_SSANNECAPTAINSROOM_CAPTAIN"
      }
    ]
  },
  textPointers: []
};
