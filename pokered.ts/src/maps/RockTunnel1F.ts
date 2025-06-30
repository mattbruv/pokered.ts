import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCK_TUNNEL_1F_BLOCKS } from "../data/blocks/RockTunnel1F";
import { OverworldSprite } from "../sprite";

export const RockTunnel1F: Map = {
  width: 20,
  height: 18,
  borderBlock: 3,
  blocks: ROCK_TUNNEL_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 15, y: 3, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 15, y: 0, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 15, y: 33, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 15, y: 35, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 37, y: 3, toMap: MapName.RockTunnelB1F, warpIndex: 0 },
      { x: 5, y: 3, toMap: MapName.RockTunnelB1F, warpIndex: 1 },
      { x: 17, y: 11, toMap: MapName.RockTunnelB1F, warpIndex: 2 },
      { x: 37, y: 17, toMap: MapName.RockTunnelB1F, warpIndex: 3 }
    ],
    backgroundItems: [{ x: 11, y: 29, signId: "TEXT_ROCKTUNNEL1F_SIGN" }],
    objects: [
      {
        type: "trainer",
        x: 7,
        y: 5,
        sprite: OverworldSprite.SPRITE_HIKER,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNEL1F_HIKER1",
        trainerId: "OPP_HIKER",
        trainerLevel: 12
      },
      {
        type: "trainer",
        x: 5,
        y: 16,
        sprite: OverworldSprite.SPRITE_HIKER,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNEL1F_HIKER2",
        trainerId: "OPP_HIKER",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 17,
        y: 15,
        sprite: OverworldSprite.SPRITE_HIKER,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNEL1F_HIKER3",
        trainerId: "OPP_HIKER",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 23,
        y: 8,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNEL1F_SUPER_NERD",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 37,
        y: 21,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNEL1F_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 17
      },
      {
        type: "trainer",
        x: 22,
        y: 24,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNEL1F_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 18
      },
      {
        type: "trainer",
        x: 32,
        y: 24,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNEL1F_COOLTRAINER_F3",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 19
      }
    ]
  },
  textPointers: []
};
