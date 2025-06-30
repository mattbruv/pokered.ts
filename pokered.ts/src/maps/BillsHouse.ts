import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BILLS_HOUSE_BLOCKS } from "../data/blocks/BillsHouse";
import { OverworldSprite } from "../sprite";

export const BillsHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 13,
  blocks: BILLS_HOUSE_BLOCKS,
  tileset: Tileset.INTERIOR,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 5,
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_BILLSHOUSE_BILL_POKEMON"
      },
      {
        type: "sprite",
        x: 4,
        y: 4,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_BILLSHOUSE_BILL_SS_TICKET"
      },
      {
        type: "sprite",
        x: 6,
        y: 5,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_BILLSHOUSE_BILL_CHECK_OUT_MY_RARE_POKEMON"
      }
    ]
  },
  textPointers: []
};
