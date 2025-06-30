import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BIKE_SHOP_BLOCKS } from "../data/blocks/BikeShop";

export const BikeShop: Map = {
  width: 4,
  height: 4,
  borderBlock: 14,
  blocks: BIKE_SHOP_BLOCKS,
  tileset: Tileset.CLUB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 2,
        sprite: "SPRITE_BIKE_SHOP_CLERK",
        movement: "STAY",
        textId: "TEXT_BIKESHOP_CLERK"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        sprite: "SPRITE_MIDDLE_AGED_WOMAN",
        movement: "WALK",
        textId: "TEXT_BIKESHOP_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 1,
        y: 3,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_BIKESHOP_YOUNGSTER"
      }
    ]
  },
  textPointers: []
};
