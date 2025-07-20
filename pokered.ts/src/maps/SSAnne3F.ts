import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_3F_BLOCKS } from "../data/blocks/SSAnne3F";
import { OverworldSprite } from "../sprite";

export const SSAnne3F: Map = {
  width: 10,
  height: 3,
  borderBlock: 12,
  blocks: SS_ANNE_3F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 3, toMap: MapName.SSAnneBow, warpIndex: 0 },
      { x: 19, y: 3, toMap: MapName.SSAnne2F, warpIndex: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 9,
        y: 3,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_SAILOR,
        movement: "WALK",
        textId: "TEXT_SSANNE3F_SAILOR"
      }
    ]
  },
  textPointers: []
};
