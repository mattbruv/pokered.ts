import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SEAFOAM_ISLANDS_B3F_BLOCKS } from "../data/blocks/SeafoamIslandsB3F";
import { OverworldSprite } from "../sprite";

export const SeafoamIslandsB3F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: SEAFOAM_ISLANDS_B3F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 5, y: 12, toMap: MapName.SeafoamIslandsB2F, warpIndex: 1 },
      { x: 8, y: 6, toMap: MapName.SeafoamIslandsB4F, warpIndex: 2 },
      { x: 25, y: 4, toMap: MapName.SeafoamIslandsB4F, warpIndex: 3 },
      { x: 25, y: 3, toMap: MapName.SeafoamIslandsB2F, warpIndex: 4 },
      { x: 25, y: 14, toMap: MapName.SeafoamIslandsB2F, warpIndex: 6 },
      { x: 20, y: 17, toMap: MapName.SeafoamIslandsB4F, warpIndex: 0 },
      { x: 21, y: 17, toMap: MapName.SeafoamIslandsB4F, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 14,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER1"
      },
      {
        type: "sprite",
        x: 3,
        y: 15,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER2"
      },
      {
        type: "sprite",
        x: 8,
        y: 14,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER3"
      },
      {
        type: "sprite",
        x: 9,
        y: 14,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER4"
      },
      {
        type: "sprite",
        x: 18,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER5"
      },
      {
        type: "sprite",
        x: 19,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_SEAFOAMISLANDSB3F_BOULDER6"
      }
    ]
  },
  text: {}
};
