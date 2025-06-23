import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_POKECENTER_BLOCKS } from "../data/blocks/FuchsiaPokecenter";

export const FuchsiaPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: FUCHSIA_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
};
