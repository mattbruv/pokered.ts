import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_FOREST_NORTH_GATE_BLOCKS } from "../data/blocks/ViridianForestNorthGate";

export const ViridianForestNorthGate: Map = {
  width: 5,
  height: 4,
  blocks: VIRIDIAN_FOREST_NORTH_GATE_BLOCKS,
  tileset: Tileset.FOREST_GATE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
