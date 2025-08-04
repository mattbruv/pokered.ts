import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { DIGLETTS_CAVE_ROUTE_11_BLOCKS } from "../data/blocks/DiglettsCaveRoute11";
import { OverworldSprite } from "../sprite";

export const DiglettsCaveRoute11: Map = {
  width: 4,
  height: 4,
  borderBlock: 125,
  blocks: DIGLETTS_CAVE_ROUTE_11_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 4, toMap: MapName.DiglettsCave, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_DIGLETTSCAVEROUTE11_GAMBLER"
      }
    ]
  },
  text: {
    _DiglettsCaveRoute11GamblerText: [
      ["text", "What a surprise!"],
      ["line", "DIGLETTs dug this"],
      ["cont", "long tunnel!"],
      ["para", "It goes right to"],
      ["line", "VIRIDIAN CITY!"]
    ]
  }
};
