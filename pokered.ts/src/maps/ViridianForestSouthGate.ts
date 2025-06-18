import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_FOREST_SOUTH_GATE_BLOCKS } from "../data/blocks/ViridianForestSouthGate";

export const ViridianForestSouthGate: Map = {
  width: 5,
  height: 4,
  blocks: VIRIDIAN_FOREST_SOUTH_GATE_BLOCKS,
  tileset: Tileset.FOREST_GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
