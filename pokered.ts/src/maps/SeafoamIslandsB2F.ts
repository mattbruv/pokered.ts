import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B2F_BLOCKS } from "../data/blocks/SeafoamIslandsB2F";
import { OverworldSprite } from "../sprite";

export const SeafoamIslandsB2F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: SEAFOAM_ISLANDS_B2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 3, toMap: MapName.SeafoamIslandsB1F, warpIndex: 0 },
      { x: 5, y: 13, toMap: MapName.SeafoamIslandsB3F, warpIndex: 0 },
      { x: 13, y: 7, toMap: MapName.SeafoamIslandsB1F, warpIndex: 2 },
      { x: 19, y: 15, toMap: MapName.SeafoamIslandsB1F, warpIndex: 3 },
      { x: 25, y: 3, toMap: MapName.SeafoamIslandsB3F, warpIndex: 3 },
      { x: 25, y: 11, toMap: MapName.SeafoamIslandsB1F, warpIndex: 5 },
      { x: 25, y: 14, toMap: MapName.SeafoamIslandsB3F, warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 18,
        y: 6,
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB2F_BOULDER1"
      },
      {
        type: "sprite",
        x: 23,
        y: 6,
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB2F_BOULDER2"
      }
    ]
  },
  textPointers: []
};
