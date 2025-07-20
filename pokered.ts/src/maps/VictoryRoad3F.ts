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
  textPointers: []
};
