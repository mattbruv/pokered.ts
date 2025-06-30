import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_1F_BLOCKS } from "../data/blocks/SeafoamIslands1F";
import { OverworldSprite } from "../sprite";

export const SeafoamIslands1F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: SEAFOAM_ISLANDS_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 17, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 5, y: 17, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 26, y: 17, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 27, y: 17, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 7, y: 5, toMap: MapName.SeafoamIslandsB1F, warpIndex: 1 },
      { x: 25, y: 3, toMap: MapName.SeafoamIslandsB1F, warpIndex: 6 },
      { x: 23, y: 15, toMap: MapName.SeafoamIslandsB1F, warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 18,
        y: 10,
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDS1F_BOULDER1"
      },
      {
        type: "sprite",
        x: 26,
        y: 7,
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDS1F_BOULDER2"
      }
    ]
  },
  textPointers: []
};
