import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_7_BLOCKS } from "../data/blocks/UndergroundPathRoute7";
import { OverworldSprite } from "../sprite";

export const UndergroundPathRoute7: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: UNDERGROUND_PATH_ROUTE_7_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 4, toMap: MapName.UndergroundPathWestEast, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 4,
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE7_MIDDLE_AGED_MAN"
      }
    ]
  },
  textPointers: []
};
