import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { INDIGO_PLATEAU_BLOCKS } from "../data/blocks/IndigoPlateau";

export const IndigoPlateau: Map = {
  width: 10,
  height: 9,
  blocks: INDIGO_PLATEAU_BLOCKS,
  tileset: Tileset.PLATEAU,
  connections: {
  south: { map: MapName.Route23, yOffset: 0 }
},
  object: {},
  textPointers: [],
  script: () => {},
};
