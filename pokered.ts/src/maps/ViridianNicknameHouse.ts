import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_NICKNAME_HOUSE_BLOCKS } from "../data/blocks/ViridianNicknameHouse";

export const ViridianNicknameHouse: Map = {
  width: 4,
  height: 4,
  blocks: VIRIDIAN_NICKNAME_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
