import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCK_TUNNEL_B1F_BLOCKS } from "../data/blocks/RockTunnelB1F";
import { OverworldSprite } from "../sprite";

export const RockTunnelB1F: Map = {
  width: 20,
  height: 18,
  borderBlock: 3,
  blocks: ROCK_TUNNEL_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 33, y: 25, toMap: MapName.RockTunnel1F, warpIndex: 4 },
      { x: 27, y: 3, toMap: MapName.RockTunnel1F, warpIndex: 5 },
      { x: 23, y: 11, toMap: MapName.RockTunnel1F, warpIndex: 6 },
      { x: 3, y: 3, toMap: MapName.RockTunnel1F, warpIndex: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 11,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 6,
        y: 10,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_HIKER1",
        trainerId: "OPP_HIKER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 3,
        y: 5,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_SUPER_NERD1",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 20,
        y: 21,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_SUPER_NERD2",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 30,
        y: 10,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_HIKER2",
        trainerId: "OPP_HIKER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 14,
        y: 28,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 33,
        y: 5,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_HIKER3",
        trainerId: "OPP_HIKER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 26,
        y: 30,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELB1F_SUPER_NERD3",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 5
      }
    ]
  },
  text: {
    _RockTunnelB1FCooltrainerF1BattleText: [
      ["text", "Hikers leave twigs"],
      ["line", "as trail markers."]
    ],
    _RockTunnelB1FCooltrainerF1EndBattleText: [
      ["text", "Ohhh!"],
      ["line", "I did my best!"],
      ["prompt"]
    ],
    _RockTunnelB1FCooltrainerF1AfterBattleText: [
      ["text", "I want to go "],
      ["line", "home!"]
    ],
    _RockTunnelB1FHiker1BattleText: [
      ["text", "Hahaha! Can you"],
      ["line", "beat my power?"]
    ],
    _RockTunnelB1FHiker1EndBattleText: [
      ["text", "Oops!"],
      ["line", "Out-muscled!"],
      ["prompt"]
    ],
    _RockTunnelB1FHiker1AfterBattleText: [
      ["text", "I go for power"],
      ["line", "because I hate"],
      ["cont", "thinking!"]
    ],
    _RockTunnelB1FSuperNerd1BattleText: [
      ["text", "You have a"],
      ["line", "#DEX?"],
      ["cont", "I want one too!"]
    ],
    _RockTunnelB1FSuperNerd1EndBattleText: [
      ["text", "Shoot!"],
      ["line", "I'm so jealous!"],
      ["prompt"]
    ],
    _RockTunnelB1FSuperNerd1AfterBattleText: [
      ["text", "When you finish"],
      ["line", "your #DEX, can"],
      ["cont", "I have it?"]
    ],
    _RockTunnelB1FSuperNerd2BattleText: [
      ["text", "Do you know about"],
      ["line", "costume players?"]
    ],
    _RockTunnelB1FSuperNerd2EndBattleText: [
      ["text", "Well,"],
      ["line", "that's that."],
      ["prompt"]
    ],
    _RockTunnelB1FSuperNerd2AfterBattleText: [
      ["text", "Costume players"],
      ["line", "dress up as"],
      ["cont", "#MON for fun."]
    ],
    _RockTunnelB1FHiker2BattleText: [
      ["text", "My #MON"],
      ["line", "techniques will"],
      ["cont", "leave you crying!"]
    ],
    _RockTunnelB1FHiker2EndBattleText: [
      ["text", "I give!"],
      ["line", "You're a better"],
      ["cont", "technician!"],
      ["prompt"]
    ],
    _RockTunnelB1FHiker2AfterBattleText: [
      ["text", "In mountains,"],
      ["line", "you'll often find"],
      ["cont", "rock-type #MON."]
    ],
    _RockTunnelB1FCooltrainerF2BattleText: [
      ["text", "I don't often"],
      ["line", "come here, but I"],
      ["cont", "will fight you."]
    ],
    _RockTunnelB1FCooltrainerF2EndBattleText: [
      ["text", "Oh!"],
      ["line", "I lost!"],
      ["prompt"]
    ],
    _RockTunnelB1FCooltrainerF2AfterBattleText: [
      ["text", "I like tiny"],
      ["line", "#MON, big ones"],
      ["cont", "are too scary!"]
    ],
    _RockTunnelB1FHiker3BattleText: [
      ["text", "Hit me with your"],
      ["line", "best shot!"]
    ],
    _RockTunnelB1FHiker3EndBattleText: [
      ["text", "Fired"],
      ["line", "away!"],
      ["prompt"]
    ]
  }
};
