import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VICTORY_ROAD_2F_BLOCKS } from "../data/blocks/VictoryRoad2F";

export const VictoryRoad2F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: VICTORY_ROAD_2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 8, toMap: MapName.VictoryRoad1F, warpId: 3 },
      { x: 29, y: 7, toMap: "LAST_MAP", warpId: 4 },
      { x: 29, y: 8, toMap: "LAST_MAP", warpId: 4 },
      { x: 23, y: 7, toMap: MapName.VictoryRoad3F, warpId: 1 },
      { x: 25, y: 14, toMap: MapName.VictoryRoad3F, warpId: 3 },
      { x: 27, y: 7, toMap: MapName.VictoryRoad3F, warpId: 2 },
      { x: 1, y: 1, toMap: MapName.VictoryRoad3F, warpId: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 9,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_HIKER",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 21,
        y: 13,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_SUPER_NERD1",
        trainerId: "OPP_JUGGLER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 19,
        y: 8,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_COOLTRAINER_M",
        trainerId: "OPP_TAMER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 4,
        y: 2,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_SUPER_NERD2",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 26,
        y: 3,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_SUPER_NERD3",
        trainerId: "OPP_JUGGLER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 11,
        y: 5,
        sprite: "SPRITE_BIRD",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_MOLTRES",
        trainerId: "MOLTRES",
        trainerLevel: 50
      },
      {
        type: "item",
        x: 27,
        y: 5,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_TM_SUBMISSION",
        itemId: "TM_SUBMISSION"
      },
      {
        type: "item",
        x: 18,
        y: 9,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_FULL_HEAL",
        itemId: "FULL_HEAL"
      },
      {
        type: "item",
        x: 9,
        y: 11,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_TM_MEGA_KICK",
        itemId: "TM_MEGA_KICK"
      },
      {
        type: "item",
        x: 11,
        y: 0,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_GUARD_SPEC",
        itemId: "GUARD_SPEC"
      },
      {
        type: "sprite",
        x: 4,
        y: 14,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_BOULDER1"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_BOULDER2"
      },
      {
        type: "sprite",
        x: 23,
        y: 16,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_BOULDER3"
      }
    ]
  },
  textPointers: []
};
