import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VICTORY_ROAD_1F_BLOCKS } from "../data/blocks/VictoryRoad1F";
import { OverworldSprite } from "../sprite";

export const VictoryRoad1F: Map = {
  width: 10,
  height: 9,
  borderBlock: 125,
  blocks: VICTORY_ROAD_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 8, y: 17, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 9, y: 17, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 1, y: 1, toMap: MapName.VictoryRoad2F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 7,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_COOLTRAINER_F",
        trainerId: "OPP_COOLTRAINER_F",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 3,
        y: 2,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_COOLTRAINER_M",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 5
      },
      {
        type: "item",
        x: 11,
        y: 0,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_TM_SKY_ATTACK",
        itemId: "TM_SKY_ATTACK"
      },
      {
        type: "item",
        x: 9,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "sprite",
        x: 5,
        y: 15,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_BOULDER1"
      },
      {
        type: "sprite",
        x: 14,
        y: 2,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_BOULDER2"
      },
      {
        type: "sprite",
        x: 2,
        y: 10,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_BOULDER3"
      }
    ]
  },
  text: {
    _VictoryRoad1FCooltrainerFBattleText: [
      ["text", "I wonder if you"],
      ["line", "are good enough"],
      ["cont", "for me!"]
    ],
    _VictoryRoad1FCooltrainerFEndBattleText: [
      ["text", "I"],
      ["line", "lost out!"],
      ["prompt"]
    ],
    _VictoryRoad1FCooltrainerFAfterBattleText: [
      ["text", "I never wanted to"],
      ["line", "lose to anybody!"]
    ],
    _VictoryRoad1FCooltrainerMBattleText: [
      ["text", "I can see you're"],
      ["line", "good! Let me see"],
      ["cont", "exactly how good!"]
    ],
    _VictoryRoad1FCooltrainerMEndBattleText: [
      ["text", "I"],
      ["line", "had a chance..."],
      ["prompt"]
    ],
    _VictoryRoad1FCooltrainerMAfterBattleText: [
      ["text", "I concede, you're"],
      ["line", "better than me!"]
    ]
  }
};
