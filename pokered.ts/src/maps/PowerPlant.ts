import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POWER_PLANT_BLOCKS } from "../data/blocks/PowerPlant";

export const PowerPlant: Map = {
  width: 20,
  height: 18,
  blocks: POWER_PLANT_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
