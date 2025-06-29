import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MUSEUM_2F_BLOCKS } from "../data/blocks/Museum2F";

export const Museum2F: Map = {
  width: 7,
  height: 4,
  borderBlock: 10,
  blocks: MUSEUM_2F_BLOCKS,
  tileset: Tileset.MUSEUM,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 7, toMap: "MUSEUM_1F", warpId: 5 }],
    backgroundItems: [
      { x: 11, y: 2, signId: "TEXT_MUSEUM2F_SPACE_SHUTTLE_SIGN" },
      { x: 2, y: 5, signId: "TEXT_MUSEUM2F_MOON_STONE_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 7,
        sprite: "SPRITE_YOUNGSTER",
        movement: "WALK",
        textId: "TEXT_MUSEUM2F_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: "SPRITE_GRAMPS",
        movement: "STAY",
        textId: "TEXT_MUSEUM2F_GRAMPS"
      },
      {
        type: "sprite",
        x: 7,
        y: 5,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_MUSEUM2F_SCIENTIST"
      },
      {
        type: "sprite",
        x: 11,
        y: 5,
        sprite: "SPRITE_BRUNETTE_GIRL",
        movement: "STAY",
        textId: "TEXT_MUSEUM2F_BRUNETTE_GIRL"
      },
      {
        type: "sprite",
        x: 12,
        y: 5,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_MUSEUM2F_HIKER"
      }
    ]
  },
  textPointers: []
};
