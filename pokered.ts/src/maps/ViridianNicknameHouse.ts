import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_NICKNAME_HOUSE_BLOCKS } from "../data/blocks/ViridianNicknameHouse";

export const ViridianNicknameHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: VIRIDIAN_NICKNAME_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpId: 4 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpId: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        sprite: "SPRITE_BALDING_GUY",
        movement: "STAY",
        textId: "TEXT_VIRIDIANNICKNAMEHOUSE_BALDING_GUY"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: "SPRITE_LITTLE_GIRL",
        movement: "WALK",
        textId: "TEXT_VIRIDIANNICKNAMEHOUSE_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        sprite: "SPRITE_BIRD",
        movement: "WALK",
        textId: "TEXT_VIRIDIANNICKNAMEHOUSE_SPEAROW"
      },
      {
        type: "sprite",
        x: 4,
        y: 0,
        sprite: "SPRITE_CLIPBOARD",
        movement: "STAY",
        textId: "TEXT_VIRIDIANNICKNAMEHOUSE_SPEARY_SIGN"
      }
    ]
  },
  textPointers: []
};
