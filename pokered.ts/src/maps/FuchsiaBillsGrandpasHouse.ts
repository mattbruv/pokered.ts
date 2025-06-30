import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_BILLS_GRANDPAS_HOUSE_BLOCKS } from "../data/blocks/FuchsiaBillsGrandpasHouse";
import { OverworldSprite } from "../sprite";

export const FuchsiaBillsGrandpasHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: FUCHSIA_BILLS_GRANDPAS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_WOMAN,
        movement: "STAY",
        textId: "TEXT_FUCHSIABILLSGRANDPASHOUSE_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_FUCHSIABILLSGRANDPASHOUSE_BILLS_GRANDPA"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_FUCHSIABILLSGRANDPASHOUSE_YOUNGSTER"
      }
    ]
  },
  textPointers: []
};
