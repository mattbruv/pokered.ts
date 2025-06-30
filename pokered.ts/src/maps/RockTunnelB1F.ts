import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCK_TUNNEL_B1F_BLOCKS } from "../data/blocks/RockTunnelB1F";

export const RockTunnelB1F: Map = {
  width: 20,
  height: 18,
  borderBlock: 3,
  blocks: ROCK_TUNNEL_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 33, y: 25, toMap: MapName.RockTunnel1F, warpId: 5 },
      { x: 27, y: 3, toMap: MapName.RockTunnel1F, warpId: 6 },
      { x: 23, y: 11, toMap: MapName.RockTunnel1F, warpId: 7 },
      { x: 3, y: 3, toMap: MapName.RockTunnel1F, warpId: 8 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 11,
        y: 13,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 6,
        y: 10,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_HIKER1",
        trainerId: "OPP_HIKER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 3,
        y: 5,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_SUPER_NERD1",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 20,
        y: 21,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_SUPER_NERD2",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 30,
        y: 10,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_HIKER2",
        trainerId: "OPP_HIKER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 14,
        y: 28,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 33,
        y: 5,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_HIKER3",
        trainerId: "OPP_HIKER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 26,
        y: 30,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_SUPER_NERD3",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 5
      }
    ]
  },
  textPointers: []
};
