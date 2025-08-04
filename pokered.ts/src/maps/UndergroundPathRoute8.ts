import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { UNDERGROUND_PATH_ROUTE_8_BLOCKS } from "../data/blocks/UndergroundPathRoute8";
import { OverworldSprite } from "../sprite";

export const UndergroundPathRoute8: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: UNDERGROUND_PATH_ROUTE_8_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 4, toMap: MapName.UndergroundPathWestEast, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_UNDERGROUNDPATHROUTE8_GIRL"
      }
    ]
  },
  text: {
    _UndergroundPathRoute8GirlText: [
      ["text", "The dept. store"],
      ["line", "in CELADON has a"],
      ["cont", "great selection!"]
    ]
  }
};
