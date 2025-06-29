import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FIGHTING_DOJO_BLOCKS } from "../data/blocks/FightingDojo";

export const FightingDojo: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: FIGHTING_DOJO_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: "LAST_MAP", warpId: 2 },
      { x: 5, y: 11, toMap: "LAST_MAP", warpId: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 3,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_KARATE_MASTER",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 3,
        y: 4,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_BLACKBELT1",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 3,
        y: 6,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_BLACKBELT2",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 5,
        y: 5,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_BLACKBELT3",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 5,
        y: 7,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_BLACKBELT4",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 5
      },
      {
        type: "sprite",
        x: 4,
        y: 1,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_HITMONLEE_POKE_BALL"
      },
      {
        type: "sprite",
        x: 5,
        y: 1,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_HITMONCHAN_POKE_BALL"
      }
    ]
  },
  textPointers: []
};
