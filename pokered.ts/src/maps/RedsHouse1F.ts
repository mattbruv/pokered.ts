import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { REDS_HOUSE_1F_BLOCKS } from "../data/blocks/RedsHouse1F";
import { OverworldSprite } from "../sprite";

export const RedsHouse1F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: REDS_HOUSE_1F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_1,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 7, y: 1, toMap: MapName.RedsHouse2F, warpIndex: 0 }
    ],
    backgroundItems: [{ x: 3, y: 1, signId: "TEXT_REDSHOUSE1F_TV" }],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 4,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_MOM,
        movement: "STAY",
        textId: "TEXT_REDSHOUSE1F_MOM"
      }
    ]
  },
  textPointers: []
};
