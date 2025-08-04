import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_MEETING_ROOM_BLOCKS } from "../data/blocks/FuchsiaMeetingRoom";
import { OverworldSprite } from "../sprite";

export const FuchsiaMeetingRoom: Map = {
  width: 7,
  height: 4,
  borderBlock: 23,
  blocks: FUCHSIA_MEETING_ROOM_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 6 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SAFARI_ZONE_WORKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAMEETINGROOM_SAFARI_ZONE_WORKER1"
      },
      {
        type: "sprite",
        x: 0,
        y: 2,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_SAFARI_ZONE_WORKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAMEETINGROOM_SAFARI_ZONE_WORKER2"
      },
      {
        type: "sprite",
        x: 10,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SAFARI_ZONE_WORKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAMEETINGROOM_SAFARI_ZONE_WORKER3"
      }
    ]
  },
  text: {
    _FuchsiaMeetingRoomSafariZoneWorker1: [
      ["text", "We nicknamed the"],
      ["line", "WARDEN SLOWPOKE."],
      ["para", "He and SLOWPOKE"],
      ["line", "both look vacant!"]
    ],
    _FuchsiaMeetingRoomSafariZoneWorker2: [
      ["text", "SLOWPOKE is very"],
      ["line", "knowledgeable"],
      ["cont", "about #MON!"],
      ["para", "He even has some"],
      ["line", "fossils of rare,"],
      ["cont", "extinct #MON!"]
    ],
    _FuchsiaMeetingRoomSafariZoneWorker3: [
      ["text", "SLOWPOKE came in,"],
      ["line", "but I couldn't"],
      ["cont", "understand him."],
      ["para", "I think he's got"],
      ["line", "a speech problem!"]
    ]
  }
};
