import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BIKE_SHOP_BLOCKS } from "../data/blocks/BikeShop";

export const BikeShop: Map = {
  width: 4,
  height: 4,
  blocks: BIKE_SHOP_BLOCKS,
  tileset: Tileset.CLUB,
  connections: {},
  object: {},
  textPointers: [],
};
