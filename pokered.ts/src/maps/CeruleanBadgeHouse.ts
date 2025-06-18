import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_BADGE_HOUSE_BLOCKS } from "../data/blocks/CeruleanBadgeHouse";

export const CeruleanBadgeHouse: Map = {
  width: 4,
  height: 4,
  blocks: CERULEAN_BADGE_HOUSE_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
