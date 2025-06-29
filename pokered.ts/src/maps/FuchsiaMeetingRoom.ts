import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_MEETING_ROOM_BLOCKS } from "../data/blocks/FuchsiaMeetingRoom";

export const FuchsiaMeetingRoom: Map = {
  width: 7,
  height: 4,
  borderBlock: 23,
  blocks: FUCHSIA_MEETING_ROOM_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: "LAST_MAP", warpId: 7 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpId: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 1,
        sprite: "SPRITE_SAFARI_ZONE_WORKER",
        movement: "STAY",
        textId: "TEXT_FUCHSIAMEETINGROOM_SAFARI_ZONE_WORKER1"
      },
      {
        type: "sprite",
        x: 0,
        y: 2,
        sprite: "SPRITE_SAFARI_ZONE_WORKER",
        movement: "STAY",
        textId: "TEXT_FUCHSIAMEETINGROOM_SAFARI_ZONE_WORKER2"
      },
      {
        type: "sprite",
        x: 10,
        y: 1,
        sprite: "SPRITE_SAFARI_ZONE_WORKER",
        movement: "STAY",
        textId: "TEXT_FUCHSIAMEETINGROOM_SAFARI_ZONE_WORKER3"
      }
    ]
  },
  textPointers: []
};
