import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B2F_BLOCKS } from "../data/blocks/RocketHideoutB2F";

export const RocketHideoutB2F: Map = {
  width: 15,
  height: 14,
  borderBlock: 46,
  blocks: ROCKET_HIDEOUT_B2F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 27, y: 8, toMap: MapName.RocketHideoutB1F, warpId: 1 },
      { x: 21, y: 8, toMap: MapName.RocketHideoutB3F, warpId: 1 },
      { x: 24, y: 19, toMap: MapName.RocketHideoutElevator, warpId: 1 },
      { x: 21, y: 22, toMap: MapName.RocketHideoutB1F, warpId: 4 },
      { x: 25, y: 19, toMap: MapName.RocketHideoutElevator, warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 20,
        y: 12,
        sprite: "SPRITE_ROCKET",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_ROCKET",
        trainerId: "OPP_ROCKET",
        trainerLevel: 13
      },
      {
        type: "item",
        x: 1,
        y: 11,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_MOON_STONE",
        itemId: "MOON_STONE"
      },
      {
        type: "item",
        x: 16,
        y: 8,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_NUGGET",
        itemId: "NUGGET"
      },
      {
        type: "item",
        x: 6,
        y: 12,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_TM_HORN_DRILL",
        itemId: "TM_HORN_DRILL"
      },
      {
        type: "item",
        x: 3,
        y: 21,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_SUPER_POTION",
        itemId: "SUPER_POTION"
      }
    ]
  },
  textPointers: []
};
