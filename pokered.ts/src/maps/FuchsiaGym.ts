import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_GYM_BLOCKS } from "../data/blocks/FuchsiaGym";

export const FuchsiaGym: Map = {
  width: 5,
  height: 9,
  blocks: FUCHSIA_GYM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  object: {},
  textPointers: [],
};
