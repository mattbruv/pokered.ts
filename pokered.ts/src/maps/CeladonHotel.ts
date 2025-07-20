import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_HOTEL_BLOCKS } from "../data/blocks/CeladonHotel";
import { OverworldSprite } from "../sprite";

export const CeladonHotel: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: CELADON_HOTEL_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 12 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 12 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GRANNY,
        movement: "STAY",
        textId: "TEXT_CELADONHOTEL_GRANNY"
      },
      {
        type: "sprite",
        x: 2,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "STAY",
        textId: "TEXT_CELADONHOTEL_BEAUTY"
      },
      {
        type: "sprite",
        x: 8,
        y: 4,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "WALK",
        textId: "TEXT_CELADONHOTEL_SUPER_NERD"
      }
    ]
  },
  textPointers: []
};
