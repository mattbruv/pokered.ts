import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B1F_BLOCKS } from "../data/blocks/SeafoamIslandsB1F";
import { OverworldSprite } from "../sprite";

export const SeafoamIslandsB1F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: SEAFOAM_ISLANDS_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 2, toMap: MapName.SeafoamIslandsB2F, warpIndex: 0 },
      { x: 7, y: 5, toMap: MapName.SeafoamIslands1F, warpIndex: 4 },
      { x: 13, y: 7, toMap: MapName.SeafoamIslandsB2F, warpIndex: 2 },
      { x: 19, y: 15, toMap: MapName.SeafoamIslandsB2F, warpIndex: 3 },
      { x: 23, y: 15, toMap: MapName.SeafoamIslands1F, warpIndex: 6 },
      { x: 25, y: 11, toMap: MapName.SeafoamIslandsB2F, warpIndex: 5 },
      { x: 25, y: 3, toMap: MapName.SeafoamIslands1F, warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 17,
        y: 6,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB1F_BOULDER1"
      },
      {
        type: "sprite",
        x: 22,
        y: 6,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB1F_BOULDER2"
      }
    ]
  },
  textPointers: []
};
