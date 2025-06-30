import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_10_BLOCKS } from "../data/blocks/Route10";

export const Route10: Map = {
  width: 10,
  height: 36,
  borderBlock: 44,
  blocks: ROUTE_10_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.LavenderTown, yOffset: 0 },
    west: { map: MapName.Route9, xOffset: 0 }
  },
  objects: {
    warps: [
      { x: 11, y: 19, toMap: MapName.RockTunnelPokecenter, warpId: 1 },
      { x: 8, y: 17, toMap: MapName.RockTunnel1F, warpId: 1 },
      { x: 8, y: 53, toMap: MapName.RockTunnel1F, warpId: 3 },
      { x: 6, y: 39, toMap: MapName.PowerPlant, warpId: 1 }
    ],
    backgroundItems: [
      { x: 7, y: 19, signId: "TEXT_ROUTE10_ROCKTUNNEL_NORTH_SIGN" },
      { x: 12, y: 19, signId: "TEXT_ROUTE10_POKECENTER_SIGN" },
      { x: 9, y: 55, signId: "TEXT_ROUTE10_ROCKTUNNEL_SOUTH_SIGN" },
      { x: 5, y: 41, signId: "TEXT_ROUTE10_POWERPLANT_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 10,
        y: 44,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_ROUTE10_SUPER_NERD1",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 3,
        y: 57,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_ROUTE10_HIKER1",
        trainerId: "OPP_HIKER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 14,
        y: 64,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_ROUTE10_SUPER_NERD2",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 7,
        y: 25,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_ROUTE10_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 3,
        y: 61,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_ROUTE10_HIKER2",
        trainerId: "OPP_HIKER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 7,
        y: 54,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_ROUTE10_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 8
      }
    ]
  },
  textPointers: []
};
