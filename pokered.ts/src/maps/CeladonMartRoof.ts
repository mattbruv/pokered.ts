import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_ROOF_BLOCKS } from "../data/blocks/CeladonMartRoof";
import { OverworldSprite } from "../sprite";

export const CeladonMartRoof: Map = {
  width: 10,
  height: 4,
  borderBlock: 66,
  blocks: CELADON_MART_ROOF_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [{ x: 15, y: 2, toMap: MapName.CeladonMart5F, warpIndex: 0 }],
    backgroundItems: [
      { x: 10, y: 1, signId: "TEXT_CELADONMARTROOF_VENDING_MACHINE1" },
      { x: 11, y: 1, signId: "TEXT_CELADONMARTROOF_VENDING_MACHINE2" },
      { x: 12, y: 2, signId: "TEXT_CELADONMARTROOF_VENDING_MACHINE3" },
      { x: 13, y: 2, signId: "TEXT_CELADONMARTROOF_CURRENT_FLOOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 4,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CELADONMARTROOF_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "WALK",
        textId: "TEXT_CELADONMARTROOF_LITTLE_GIRL"
      }
    ]
  },
  textPointers: []
};
