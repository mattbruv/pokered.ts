import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MUSEUM_1F_BLOCKS } from "../data/blocks/Museum1F";

export const Museum1F: Map = {
  width: 10,
  height: 4,
  borderBlock: 10,
  blocks: MUSEUM_1F_BLOCKS,
  tileset: Tileset.MUSEUM,
  connections: {},
  objects: {
    warps: [
      { x: 10, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 11, y: 7, toMap: "LAST_MAP", warpId: 1 },
      { x: 16, y: 7, toMap: "LAST_MAP", warpId: 2 },
      { x: 17, y: 7, toMap: "LAST_MAP", warpId: 2 },
      { x: 7, y: 7, toMap: MapName.Museum2F, warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 12,
        y: 4,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_SCIENTIST1"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: "SPRITE_GAMBLER",
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_GAMBLER"
      },
      {
        type: "sprite",
        x: 15,
        y: 2,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_SCIENTIST2"
      },
      {
        type: "sprite",
        x: 17,
        y: 4,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_SCIENTIST3"
      },
      {
        type: "sprite",
        x: 16,
        y: 2,
        sprite: "SPRITE_OLD_AMBER",
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_OLD_AMBER"
      }
    ]
  },
  textPointers: []
};
