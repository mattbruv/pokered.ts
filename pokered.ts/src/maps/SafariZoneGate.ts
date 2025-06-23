import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_GATE_BLOCKS } from "../data/blocks/SafariZoneGate";

export const SafariZoneGate: Map = {
  width: 4,
  height: 3,
  blocks: SAFARI_ZONE_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  object: {},
  textPointers: [],
};
