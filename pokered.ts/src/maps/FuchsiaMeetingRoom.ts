import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_MEETING_ROOM_BLOCKS } from "../data/blocks/FuchsiaMeetingRoom";

export const FuchsiaMeetingRoom: Map = {
  width: 7,
  height: 4,
  blocks: FUCHSIA_MEETING_ROOM_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
