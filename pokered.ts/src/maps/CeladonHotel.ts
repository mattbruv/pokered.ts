import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_HOTEL_BLOCKS } from "../data/blocks/CeladonHotel";

export const CeladonHotel: Map = {
  width: 7,
  height: 4,
  blocks: CELADON_HOTEL_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
