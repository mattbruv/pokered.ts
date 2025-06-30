import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { COPYCATS_HOUSE_2F_BLOCKS } from "../data/blocks/CopycatsHouse2F";

export const CopycatsHouse2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: COPYCATS_HOUSE_2F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_2,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 1, toMap: MapName.CopycatsHouse1F, warpId: 3 }],
    backgroundItems: [
      { x: 3, y: 5, signId: "TEXT_COPYCATSHOUSE2F_SNES" },
      { x: 0, y: 1, signId: "TEXT_COPYCATSHOUSE2F_PC" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 3,
        sprite: "SPRITE_BRUNETTE_GIRL",
        movement: "WALK",
        textId: "TEXT_COPYCATSHOUSE2F_COPYCAT"
      },
      {
        type: "sprite",
        x: 4,
        y: 6,
        sprite: "SPRITE_BIRD",
        movement: "WALK",
        textId: "TEXT_COPYCATSHOUSE2F_DODUO"
      },
      {
        type: "sprite",
        x: 5,
        y: 1,
        sprite: "SPRITE_MONSTER",
        movement: "STAY",
        textId: "TEXT_COPYCATSHOUSE2F_MONSTER"
      },
      {
        type: "sprite",
        x: 2,
        y: 0,
        sprite: "SPRITE_BIRD",
        movement: "STAY",
        textId: "TEXT_COPYCATSHOUSE2F_BIRD"
      },
      {
        type: "sprite",
        x: 1,
        y: 6,
        sprite: "SPRITE_FAIRY",
        movement: "STAY",
        textId: "TEXT_COPYCATSHOUSE2F_FAIRY"
      }
    ]
  },
  textPointers: []
};
