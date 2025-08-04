import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VICTORY_ROAD_2F_BLOCKS } from "../data/blocks/VictoryRoad2F";
import { OverworldSprite } from "../sprite";

export const VictoryRoad2F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: VICTORY_ROAD_2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 0, y: 8, toMap: MapName.VictoryRoad1F, warpIndex: 2 },
      { x: 29, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 29, y: 8, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 23, y: 7, toMap: MapName.VictoryRoad3F, warpIndex: 0 },
      { x: 25, y: 14, toMap: MapName.VictoryRoad3F, warpIndex: 2 },
      { x: 27, y: 7, toMap: MapName.VictoryRoad3F, warpIndex: 1 },
      { x: 1, y: 1, toMap: MapName.VictoryRoad3F, warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 9,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_HIKER",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 21,
        y: 13,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_SUPER_NERD1",
        trainerId: "OPP_JUGGLER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 19,
        y: 8,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_COOLTRAINER_M",
        trainerId: "OPP_TAMER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 4,
        y: 2,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_SUPER_NERD2",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 26,
        y: 3,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_SUPER_NERD3",
        trainerId: "OPP_JUGGLER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 11,
        y: 5,
        sprite: OverworldSprite.SPRITE_BIRD,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_MOLTRES",
        trainerId: "MOLTRES",
        trainerLevel: 50
      },
      {
        type: "item",
        x: 27,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_TM_SUBMISSION",
        itemId: "TM_SUBMISSION"
      },
      {
        type: "item",
        x: 18,
        y: 9,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_FULL_HEAL",
        itemId: "FULL_HEAL"
      },
      {
        type: "item",
        x: 9,
        y: 11,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_TM_MEGA_KICK",
        itemId: "TM_MEGA_KICK"
      },
      {
        type: "item",
        x: 11,
        y: 0,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_GUARD_SPEC",
        itemId: "GUARD_SPEC"
      },
      {
        type: "sprite",
        x: 4,
        y: 14,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_BOULDER1"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_BOULDER2"
      },
      {
        type: "sprite",
        x: 23,
        y: 16,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD2F_BOULDER3"
      }
    ]
  },
  text: {
    _VictoryRoad2FMoltresBattleText: [["text", "Gyaoo!@"], ["text_end"]],
    _VictoryRoad2FHikerBattleText: [
      ["text", "VICTORY ROAD is"],
      ["line", "the final test"],
      ["cont", "for trainers!"]
    ],
    _VictoryRoad2FHikerEndBattleText: [["text", "Aiyah!"], ["prompt"]],
    _VictoryRoad2FHikerAfterBattleText: [
      ["text", "If you get stuck,"],
      ["line", "try moving some"],
      ["cont", "boulders around!"]
    ],
    _VictoryRoad2FSuperNerd1BattleText: [
      ["text", "Ah, so you wish"],
      ["line", "to challenge the"],
      ["cont", "ELITE FOUR?"]
    ],
    _VictoryRoad2FSuperNerd1EndBattleText: [
      ["text", "You"],
      ["line", "got me!"],
      ["prompt"]
    ],
    _VictoryRoad2FSuperNerd1AfterBattleText: [
      ["text", "<RIVAL> also came"],
      ["line", "through here!"]
    ],
    _VictoryRoad2FCooltrainerMBattleText: [
      ["text", "Come on!"],
      ["line", "I'll whip you!"]
    ],
    _VictoryRoad2FCooltrainerMEndBattleText: [
      ["text", "I got"],
      ["line", "whipped!"],
      ["prompt"]
    ],
    _VictoryRoad2FCooltrainerMAfterBattleText: [
      ["text", "You earned the"],
      ["line", "right to be on"],
      ["cont", "VICTORY ROAD!"]
    ],
    _VictoryRoad2FSuperNerd2BattleText: [
      ["text", "If you can get"],
      ["line", "through here, you"],
      ["cont", "can go meet the"],
      ["cont", "ELITE FOUR!"]
    ],
    _VictoryRoad2FSuperNerd2EndBattleText: [
      ["text", "No!"],
      ["line", "Unbelievable!"],
      ["prompt"]
    ],
    _VictoryRoad2FSuperNerd2AfterBattleText: [
      ["text", "I can beat you"],
      ["line", "when it comes to"],
      ["cont", "knowledge about"],
      ["cont", "#MON!"]
    ],
    _VictoryRoad2FSuperNerd3BattleText: [
      ["text", "Is VICTORY ROAD"],
      ["line", "too tough?"]
    ],
    _VictoryRoad2FSuperNerd3EndBattleText: [
      ["text", "Well"],
      ["line", "done!"],
      ["prompt"]
    ],
    _VictoryRoad2FSuperNerd3AfterBattleText: [
      ["text", "Many trainers give"],
      ["line", "up the challenge"],
      ["cont", "here."]
    ]
  }
};
