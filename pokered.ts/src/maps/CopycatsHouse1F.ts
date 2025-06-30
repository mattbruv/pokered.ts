import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { COPYCATS_HOUSE_1F_BLOCKS } from "../data/blocks/CopycatsHouse1F";
import { OverworldSprite } from "../sprite";

export const CopycatsHouse1F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: COPYCATS_HOUSE_1F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_1,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 7, y: 1, toMap: MapName.CopycatsHouse2F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 2,
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_WOMAN,
        movement: "STAY",
        textId: "TEXT_COPYCATSHOUSE1F_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 5,
        y: 4,
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_COPYCATSHOUSE1F_MIDDLE_AGED_MAN"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: OverworldSprite.SPRITE_FAIRY,
        movement: "WALK",
        textId: "TEXT_COPYCATSHOUSE1F_CHANSEY"
      }
    ]
  },
  textPointers: []
};
