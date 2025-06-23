import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MR_PSYCHICS_HOUSE_BLOCKS } from "../data/blocks/MrPsychicsHouse";

export const MrPsychicsHouse: Map = {
  width: 4,
  height: 4,
  blocks: MR_PSYCHICS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
};
