import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_FOREST_BLOCKS } from "../data/blocks/ViridianForest";

export const ViridianForest: Map = {
  width: 5,
  height: 4,
  borderBlock: 3,
  blocks: VIRIDIAN_FOREST_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  objects: {
    warps: [
      { x: 1, y: 0, toMap: MapName.ViridianForestNorthGate, warpId: 3 },
      { x: 2, y: 0, toMap: MapName.ViridianForestNorthGate, warpId: 4 },
      { x: 15, y: 47, toMap: MapName.ViridianForestSouthGate, warpId: 2 },
      { x: 16, y: 47, toMap: MapName.ViridianForestSouthGate, warpId: 2 },
      { x: 17, y: 47, toMap: MapName.ViridianForestSouthGate, warpId: 2 },
      { x: 18, y: 47, toMap: MapName.ViridianForestSouthGate, warpId: 2 }
    ],
    backgroundItems: [
      { x: 24, y: 40, signId: "TEXT_VIRIDIANFOREST_TRAINER_TIPS1" },
      { x: 16, y: 32, signId: "TEXT_VIRIDIANFOREST_USE_ANTIDOTE_SIGN" },
      { x: 26, y: 17, signId: "TEXT_VIRIDIANFOREST_TRAINER_TIPS2" },
      { x: 4, y: 24, signId: "TEXT_VIRIDIANFOREST_TRAINER_TIPS3" },
      { x: 18, y: 45, signId: "TEXT_VIRIDIANFOREST_TRAINER_TIPS4" },
      { x: 2, y: 1, signId: "TEXT_VIRIDIANFOREST_LEAVING_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 16,
        y: 43,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER1"
      },
      {
        type: "trainer",
        x: 30,
        y: 33,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER2",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 30,
        y: 19,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER3",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 2,
        y: 18,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER4",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 3
      },
      {
        type: "item",
        x: 25,
        y: 11,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_ANTIDOTE",
        itemId: "ANTIDOTE"
      },
      {
        type: "item",
        x: 12,
        y: 29,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_POTION",
        itemId: "POTION"
      },
      {
        type: "item",
        x: 1,
        y: 31,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_POKE_BALL",
        itemId: "POKE_BALL"
      },
      {
        type: "sprite",
        x: 27,
        y: 40,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER5"
      }
    ]
  },
  textPointers: []
};
