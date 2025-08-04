import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VICTORY_ROAD_3F_BLOCKS } from "../data/blocks/VictoryRoad3F";
import { OverworldSprite } from "../sprite";

export const VictoryRoad3F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: VICTORY_ROAD_3F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 23, y: 7, toMap: MapName.VictoryRoad2F, warpIndex: 3 },
      { x: 26, y: 8, toMap: MapName.VictoryRoad2F, warpIndex: 5 },
      { x: 27, y: 15, toMap: MapName.VictoryRoad2F, warpIndex: 4 },
      { x: 2, y: 0, toMap: MapName.VictoryRoad2F, warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 28,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_COOLTRAINER_M1",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 7,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_COOLTRAINER_F1",
        trainerId: "OPP_COOLTRAINER_F",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 6,
        y: 14,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_COOLTRAINER_M2",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 13,
        y: 3,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_COOLTRAINER_F2",
        trainerId: "OPP_COOLTRAINER_F",
        trainerLevel: 3
      },
      {
        type: "item",
        x: 26,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_MAX_REVIVE",
        itemId: "MAX_REVIVE"
      },
      {
        type: "item",
        x: 7,
        y: 7,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_TM_EXPLOSION",
        itemId: "TM_EXPLOSION"
      },
      {
        type: "sprite",
        x: 22,
        y: 3,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_BOULDER1"
      },
      {
        type: "sprite",
        x: 13,
        y: 12,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_BOULDER2"
      },
      {
        type: "sprite",
        x: 24,
        y: 10,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_BOULDER3"
      },
      {
        type: "sprite",
        x: 22,
        y: 15,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD3F_BOULDER4"
      }
    ]
  },
  text: {
    _VictoryRoad3FCooltrainerM1BattleText: [
      ["text", "I heard rumors of"],
      ["line", "a child prodigy!"]
    ],
    _VictoryRoad3FCooltrainerM1EndBattleText: [
      ["text", "The"],
      ["line", "rumors were true!"],
      ["prompt"]
    ],
    _VictoryRoad3FCooltrainerM1AfterBattleText: [
      ["text", "You beat GIOVANNI"],
      ["line", "of TEAM ROCKET?"]
    ],
    _VictoryRoad3FCooltrainerF1BattleText: [
      ["text", "I'll show you just"],
      ["line", "how good you are!"]
    ],
    _VictoryRoad3FCooltrainerF1EndBattleText: [
      ["text", "I'm"],
      ["line", "furious!"],
      ["prompt"]
    ],
    _VictoryRoad3FCooltrainerF1AfterBattleText: [
      ["text", "You showed me just"],
      ["line", "how good I was!"]
    ],
    _VictoryRoad3FCooltrainerM2BattleText: [
      ["text", "Only the chosen"],
      ["line", "can pass here!"]
    ],
    _VictoryRoad3FCooltrainerM2EndBattleText: [
      ["text", "I"],
      ["line", "don't believe it!"],
      ["prompt"]
    ],
    _VictoryRoad3FCooltrainerM2AfterBattleText: [
      ["text", "All trainers here"],
      ["line", "are headed to the"],
      ["cont", "#MON LEAGUE!"],
      ["cont", "Be careful!"]
    ],
    _VictoryRoad3FCooltrainerF2BattleText: [
      ["text", "Trainers live to"],
      ["line", "seek stronger"],
      ["cont", "opponents!"]
    ],
    _VictoryRoad3FCooltrainerF2EndBattleText: [
      ["text", "Oh!"],
      ["line", "So strong!"],
      ["prompt"]
    ],
    _VictoryRoad3FCooltrainerF2AfterBattleText: [
      ["text", "By fighting tough"],
      ["line", "battles, you get"],
      ["cont", "stronger!"]
    ]
  }
};
