import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_7_BLOCKS } from "../data/blocks/UndergroundPathRoute7Copy";
import { OverworldSprite } from "../sprite";

export const UndergroundPathRoute7Copy: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: UNDERGROUND_PATH_ROUTE_7_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 4, y: 4, toMap: MapName.UndergroundPathWestEast, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE7COPY_UNUSED_GIRL"
      },
      {
        type: "sprite",
        x: 2,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE7COPY_UNUSED_MIDDLE_AGED_MAN"
      }
    ]
  },
  textPointers: []
};
