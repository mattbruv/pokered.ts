import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_SECRET_HOUSE_BLOCKS } from "../data/blocks/SafariZoneSecretHouse";

export const SafariZoneSecretHouse: Map = {
  width: 4,
  height: 4,
  blocks: SAFARI_ZONE_SECRET_HOUSE_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  object: {},
  textPointers: [],
};
