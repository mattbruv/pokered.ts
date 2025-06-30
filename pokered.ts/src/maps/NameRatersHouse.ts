import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { NAME_RATERS_HOUSE_BLOCKS } from "../data/blocks/NameRatersHouse";

export const NameRatersHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: NAME_RATERS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        sprite: "SPRITE_SILPH_PRESIDENT",
        movement: "STAY",
        textId: "TEXT_NAMERATERSHOUSE_NAME_RATER"
      }
    ]
  },
  textPointers: []
};
