import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_GOOD_ROD_HOUSE_BLOCKS } from "../data/blocks/FuchsiaGoodRodHouse";

export const FuchsiaGoodRodHouse: Map = {
  width: 4,
  height: 4,
  blocks: FUCHSIA_GOOD_ROD_HOUSE_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
