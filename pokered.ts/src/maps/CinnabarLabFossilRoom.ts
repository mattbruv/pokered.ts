import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_LAB_FOSSIL_ROOM_BLOCKS } from "../data/blocks/CinnabarLabFossilRoom";

export const CinnabarLabFossilRoom: Map = {
  width: 4,
  height: 4,
  blocks: CINNABAR_LAB_FOSSIL_ROOM_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
