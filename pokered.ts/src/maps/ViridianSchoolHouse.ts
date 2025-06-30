import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_SCHOOL_HOUSE_BLOCKS } from "../data/blocks/ViridianSchoolHouse";
import { OverworldSprite } from "../sprite";

export const ViridianSchoolHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: VIRIDIAN_SCHOOL_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 5,
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        movement: "STAY",
        textId: "TEXT_VIRIDIANSCHOOLHOUSE_BRUNETTE_GIRL"
      },
      {
        type: "sprite",
        x: 4,
        y: 1,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_VIRIDIANSCHOOLHOUSE_COOLTRAINER_F"
      }
    ]
  },
  textPointers: []
};
