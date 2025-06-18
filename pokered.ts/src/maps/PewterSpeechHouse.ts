import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_SPEECH_HOUSE_BLOCKS } from "../data/blocks/PewterSpeechHouse";

export const PewterSpeechHouse: Map = {
  width: 4,
  height: 4,
  blocks: PEWTER_SPEECH_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
